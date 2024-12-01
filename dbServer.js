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
    const { username, email, password } = req.body;

    try {
        // Check if username exists
        var usernameQuery = 'SELECT * FROM users WHERE user_name = $1';
        var usernameResult = await client.query(usernameQuery, [username]);

        if (usernameResult.rows.length > 0) {
            console.log("Username already exists");
            return res.status(409).json({error: 'Username already exists'});
        }

        // Check if email exists
        const emailQuery = 'SELECT * FROM users WHERE email = $1';
        const emailResult = await client.query(emailQuery, [email]);

        if (emailResult.rows.length > 0) {
            console.log("Email already exists");
            return res.status(409).json({error: 'Email already exists'});
        }

        // Insert new user
        const insertUserQuery = 'INSERT INTO users (email, user_name, passwords) VALUES ($1, $2, $3) RETURNING users_id';
        const insertResult = await client.query(insertUserQuery, [email, username, password]);

        console.log("New user created with ID:", insertResult.rows[0].user_id);
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
        if(query_username_search.rows.length == 0) {
            return res.status(404).json({error: "User not found"});
        }
        const comparepassword = password == query_username_search.rows[0].passwords;
        if(!comparepassword) {
            return res.status(401).json({error: "Invalid password"});
        }
        res.status(200).json({message: "Login successful"});
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).json({error: "Internal server error"});
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
