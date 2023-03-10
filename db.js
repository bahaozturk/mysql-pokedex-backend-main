import mysql from "mysql"
import dotenv from "dotenv";
dotenv.config();


export const db = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    multipleStatements: true
})