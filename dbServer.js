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

        // Insert new user
        const insertUserQuery = 'INSERT INTO users (email, phone_number, user_name, passwords) VALUES ($1, $2, $3, $4) RETURNING users_id';
        const insertResult = await client.query(insertUserQuery, [email, phonenumber, username, password]);

        console.log("New user created with ID:", insertResult.rows[0].user_id);
        const insert_customer_query = "INSERT INTO customer (customer_id, money_spent) VALUES ($1, $2)";
        const insert_customer_result = await client.query(insert_customer_query, [insertResult.rows[0].users_id, 0]);
        res.status(201).json({message: 'User created successfully'});
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).json({error: 'Internal server error'});
    }
});

app.post("/login", async (req, res) => {
    const {username, password} = req.body;
    try {
        const sql_username_search = "SELECT * FROM users WHERE user_name = $1";
        const query_username_search = await client.query(sql_username_search, [username]);
        const user = query_username_search.rows[0];
        if(query_username_search.rows.length == 0) {
            return res.status(404).json({error: "User not found"});
        }
        const comparepassword = password == query_username_search.rows[0].passwords;
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
        return res.status(400).json({error})
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
        const password_compare = old_password == search_password_result.rows[0].passwords;
        if(!password_compare) {
            return res.status(401).json({error: "Invalid password"});
        }
        const insert_password_update = "UPDATE users SET passwords = $1 WHERE users_id = $2";
        const insert_password = client.query(insert_password_update, [new_password, user_id]);
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
    console.log(user_ID);
    if(!user_ID) {
        return res.status(400).json({error});
    }

    try {
        const result = await client.query("SELECT user_name FROM users WHERE users_id = $1", [user_ID]);
        console.log(result.rows);
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
            res.status(404).json({error: "Email not found!"});
        }
        const insert_new_password = await client.query("UPDATE users SET passwords = $1 WHERE email = $2", [new_password, email]);
        res.status(200).json({message: "Change password complete"});
    } catch(err) {
        console.error("Error in reset the password", err);
        res.status(500).json({error: "Internal server error"});
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});