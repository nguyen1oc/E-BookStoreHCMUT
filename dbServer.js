import express from 'express';
import pkg from 'pg';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { dirname } from "path";
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";
import path from "path";
import cors from 'cors';
const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();

const { Client } = pkg;

const app = express();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PORT = process.env.DB_PORT;
const port = process.env.PORT;

const client = new Client({
    connectionLimit: 100,
    user: DB_USER,  
    host: DB_HOST,         
    database: DB_DATABASE, 
    password: DB_PASSWORD, 
    port: DB_PORT,  
});

try {
    await client.connect();
    console.log("Connected to the database successfully");
} catch (err){
    console.error("Error connecting to the database or running query: ", err.stack);
};

const corsOptions = {
    origin: "http://localhost:5173",
    methods: ['GET', 'POST'],
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//Create User
app.post("/signup", async (req, res) => {
    const { username, phonenumber, email, password} = req.body;

    try {
        // Check if email exists
        const emailQuery = 'SELECT * FROM users WHERE email = $1';
        const emailResult = await client.query(emailQuery, [email]);

        if (emailResult.rows.length > 0) {
            console.log("Email already exists");
            return res.status(409).json({error: 'Email already exists'});
        };

        const phonenumber_query = 'SELECT * FROM users WHERE phone_number = $1';
        const phonenumber_result = await client.query(phonenumber_query, [phonenumber]);

        if(phonenumber_result.rows.length > 0) {
            console.log("Phone number already exist!");
            return res.status(409).json({error: 'Phone number already exists'});
        };

        const syncSequenceQuery = `
            SELECT setval(pg_get_serial_sequence('users', 'users_id'), COALESCE(MAX(users_id), 0) + 1, false)
            FROM users;
        `;
        await client.query(syncSequenceQuery);

        // Insert new user
        const hashed_password = await bcrypt.hash(password, 10);
        console.log(hashed_password);
        const insertUserQuery = 'INSERT INTO users (email, phone_number, user_name, passwords) VALUES ($1, $2, $3, $4) RETURNING users_id';
        const insertResult = await client.query(insertUserQuery, [email, phonenumber, username, hashed_password]);
        const customer_ID = insertResult.rows[0].users_id;
        console.log("New user created with ID:", customer_ID);
        const insert_customer_query = "INSERT INTO customer (customer_id, money_spent) VALUES ($1, $2)";
        const insert_customer_result = await client.query(insert_customer_query, [customer_ID, 0]);
        res.status(201).json({message: 'User created successfully'});
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).json({error: 'Internal server error'});
    }
});

app.post("/login", async (req, res) => {
    const {email, password} = req.body;
    try {
        const sql_email_search = "SELECT * FROM users WHERE email = $1";
        const query_email_search = await client.query(sql_email_search, [email]);
        const user = query_email_search.rows[0];
        if(query_email_search.rows.length == 0) {
            return res.status(404).json({error: "Email not found"});
        }
        const comparepassword = await bcrypt.compare(password, query_email_search.rows[0].passwords);
        if(!comparepassword) {
            return res.status(401).json({error: "Invalid password"});
        }

        res.status(200).json({message: "Login successful", user_id: user.users_id,});
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).json({error: "Internal server error"});
    }
});

app.post("/cart", async (req, res) => {
    const {actual_price, user_id} = req.body;
    try {
        const find_customer_query = "SELECT * FROM customer WHERE customer_id = $1";
        const find_customer_result = await client.query(find_customer_query, [user_id]);
        if(find_customer_result.rows[0] == 0) {
            const user_price_query = "INSERT INTO customer (customer_id, money_spent) VALUES ($1, $2)";
            await client.query(user_price_query, [user_id, actual_price]);
        }
        const update_total_spend_query = "UPDATE customer SET money_spent = money_spent + $1 WHERE customer_id = $2";
        const update_total_spend_result = await client.query(update_total_spend_query, [actual_price, user_id]);
        res.status(200).json({message: "Purchase successfull"});
    } catch(err) {
        console.error("Error during cart action:", err);
        res.status(500).json({error: "Internal server error"});
    }
});

app.get("/profile/information", async (req, res) => {
    const user_ID = req.query.user_id;

    if(!user_ID) {
        return res.status(400).json({error: "Cannot find the user"})
    }

    try {
        const information_query = "SELECT * FROM users WHERE users_id = $1";
        const information_result = await client.query(information_query, [user_ID]);

        if(information_result.rows.length == 0) {
            return res.status(404).json({error: "User not found"});
        }

        res.json(information_result.rows[0]);
    } catch (err) {
        console.error("Error fetching user information:", err.message);
        res.status(500).json({error: "Internal Server Error"});
    }
});

app.post("/profile/password", async (req, res) => {
    const {user_id, old_password, new_password} = req.body;

    try {
        const search_password_query = "SELECT passwords FROM users WHERE users_id = $1";
        const search_password_result = await client.query(search_password_query, [user_id]);

        if(search_password_result.rows.length == 0) {
            return res.status(404).json({error: "User not found"});
        }
        const password_compare = await bcrypt.compare(old_password, search_password_result.rows[0].passwords);
        if(!password_compare) {
            return res.status(401).json({error: "Invalid password"});
        }
        const new_password_hash = await bcrypt.hash(new_password, 10);
        const insert_password_update = "UPDATE users SET passwords = $1 WHERE users_id = $2";
        const insert_password = client.query(insert_password_update, [new_password_hash, user_id]);
        res.status(200).json({message: "Change password complete"});
    } catch(err) {
        console.error("Error during changing password:", err);
        res.status(500).json({error: "Internal server error"});
    }
});

app.get("/profile/report", async (req, res) => {
    const user_ID = req.query.user_id;

    if(!user_ID) {
        return res.status(400).json({error})
    }
    try {
        const result = await client.query("SELECT * FROM report WHERE users_ID = $1 ORDER BY report_id ASC", [user_ID]);
        res.status(200).json(result.rows);
    } catch(err) {
        console.error("Error fetching reports:", err);
        res.status(500).json({error: "Internal server error"});
    }
});

app.post("/profile/report", async (req, res) => {
    const {content, title, user_id} = req.body;
    if(!content || content.trim() === '') {
        return res.status(400).json({error: "Report content is required"});
    }
    try {
        const date = new Date();
        const result = await client.query("INSERT INTO report (report_date, description, title, users_id) VALUES ($1, $2, $3, $4) RETURNING report_id", [date, content, title, user_id]);
        res.status(201).json(result.rows[0]);
    } catch(err) {
        console.error("Error adding report:", err);
        res.status(500).json({error: "Internal server error"});
    }
});

app.get("/userdashboard", async (req, res) => {
    const user_ID = req.query.user_id;
    if(!user_ID) {
        return res.status(400).json({error: "Cannot find the user"});
    }

    try {
        const result = await client.query("SELECT user_name FROM users WHERE users_id = $1", [user_ID]);
        res.status(200).json(result.rows[0]);
    } catch(err) {
        console.error("Error finding user", err);
        res.status(500).json({error: "Internal sever error"});
    }
});

app.post("/forget", async (req, res) => {
    const {email, new_password} = req.body;

    try {
        const search_email = await client.query("SELECT email FROM users WHERE email = $1", [email]);
        if(search_email.rows.length == 0) {
            return res.status(404).json({error: "Email not found!"});
        }
        const new_password_hash = await bcrypt.hash(new_password, 10);
        const insert_new_password = await client.query("UPDATE users SET passwords = $1 WHERE email = $2", [new_password_hash, email]);
        res.status(200).json({message: "Change password complete"});
    } catch(err) {
        console.error("Error in reset the password", err);
        res.status(500).json({error: "Internal server error"});
    }
});

app.get("/lbook", async (req, res) => {
    try {
        const book_information = await client.query("SELECT b.book_id, u.user_name, p.publisher_name, b.genre, b.price, b.title, b.conditions, b.image_url FROM book b JOIN publisher p ON b.publisher_id = p.publisher_id JOIN writes w ON b.book_id = w.book_id JOIN users u ON w.author_id = u.users_id;");
        res.status(200).json(book_information.rows);
    } catch(err) {
        console.error("Error fetching books", err);
        res.status(500).json({error: "Internal server error"});
    }
});

app.post("/order", async (req, res) => {
    const {user_ID} = req.body;

    try {
        const date = new Date();
        const generate_order =  await client.query("INSERT INTO orders (order_date, customer_id) VALUES ($1, $2) RETURNING order_id", [date, user_ID]);
        res.status(200).json(generate_order.rows[0]);
    } catch(err) {
        console.error("Error: Cannot create a new order", err);
        res.status(500).json({error: "Internal server error"});
    }
});

app.post("/order_item", async (req, res) => {
    const {order_id, items} = req.body;

    if(!order_id || !items || items.length == 0) {
        return res.status(400).json({error: "Invalid order details"});
    }

    try {
        const insert_order_item = "INSERT INTO order_item (order_id, book_id, quantity, discount) VALUES ($1, $2, $3, $4)";

        for(const item of items) {
            const {book_id, quantity, discount} = item;
            const check_same_book = await client.query("SELECT * FROM order_item WHERE order_id = $1 AND book_id = $2", [order_id, book_id]);
            if(check_same_book.rows.length == 0) {
                await client.query(insert_order_item, [order_id, book_id, quantity, discount]);
            } else {
                await client.query("UPDATE order_item SET quantity = quantity + 1 WHERE order_id = $1 AND book_id = $2", [order_id, book_id]);
            }
        }
        res.status(200).json({message: "Order items saved successfully"});
    } catch(err) {
        console.error("Error saving order items:", err);
        res.status(500).json({error: "Internal server error"});
    }
});

app.get("/profile/order-items", async (req, res) => {
    const user_id = req.query.user_id;
    if(!user_id) {
        return res.status(400).json({error: "User ID is required"});
    }

    try {
        const orders = await client.query("SELECT o.order_id, b.title, i.quantity, o.total_money, o.order_date FROM orders o JOIN order_item i ON o.order_id = i.order_id JOIN book b ON i.book_id = b.book_id WHERE o.customer_id = $1", [user_id]);
        res.status(200).json(orders.rows);
    } catch(err) {
        console.error("Error fetching order history", err);
        res.status(500).json({error: "Internal server error"});
    }
});

app.get("/profile/books", async (req, res) => {
    const user_id = req.query.user_id;
    if(!user_id) {
        return res.status(400).json({error: "User ID is required"});
    }

    try {
        const show_book = await client.query("SELECT DISTINCT b.book_id, b.title, u.user_name, b.image_url FROM book b JOIN writes w ON b.book_id = w.book_id JOIN users u ON w.author_id = u.users_id JOIN order_item i ON b.book_id = i.book_id JOIN orders o ON i.order_id = o.order_id WHERE o.customer_id = $1", [user_id]);
        res.status(200).json(show_book.rows);
    } catch(err) {
        console.error("Error fetching book history", err);
        res.status(500).json({error: "Internal server error"});
    }
});

app.post("/review", async (req, res) => {
    const {review_description, stars, user_id, book_id} = req.body;

    try {
        const view_order = await client.query("SELECT DISTINCT i.review_id, i.book_id, o.customer_id FROM orders o JOIN order_item i ON o.order_id = i.order_id WHERE o.customer_id = $1 AND i.book_id = $2", [user_id, book_id]);
        if(view_order.rows.length == 0) {
            return res.status(400).json({error: "You must buy this book to review"});
        }
        const date = new Date();
        const review_id = view_order.rows[0].review_id;
        if(review_id == null) {
            const post_review = await client.query("INSERT INTO review (review_description, review_date, stars) VALUES ($1, $2, $3) RETURNING review_id", [review_description, date, stars]);
            const review_id = post_review.rows[0].review_id;
            await client.query("UPDATE order_item SET review_id = $1 FROM orders o WHERE o.customer_id = $2 AND o.order_id = order_item.order_id AND order_item.book_id = $3", [review_id, user_id, book_id]);
        } else {
            await client.query("UPDATE review SET review_description = $1, review_date = $2, stars = $3 WHERE review_id = $4", [review_description, date, stars, review_id]);
            await client.query("UPDATE order_item SET review_id = $1 FROM orders o WHERE o.customer_id = $2 AND o.order_id = order_item.order_id AND order_item.book_id = $3", [review_id, user_id, book_id]);
        };
        res.status(200).json({message: "Post view successfully"});
    } catch(err) {
        console.error("Fail to post your review!", err);
        res.status(500).json({error: "Internal server error"});
    }
});

app.get("/view_review", async (req, res) => {
    const {book_id} = req.query; 
    try {
        const get_review = await client.query("SELECT DISTINCT ON (r.review_id) r.review_id, r.review_description, r.review_date, r.stars FROM review r JOIN order_item o ON r.review_id = o.review_id WHERE o.book_id = $1 ORDER BY r.review_id, r.review_date", [book_id]);
        res.status(200).json(get_review.rows);
    } catch(err) {
        console.error("Fail to get review", err);
        res.status(500).json({error: "Internal server error"});
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});