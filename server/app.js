import { config } from "dotenv";
import express from 'express'
import cors from 'cors'
import connectDB from "./db/connectDB.js";

const app = express()

config({
    path: "./.env"
})

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}))

app.get('/', (req,res) => {
    res.send("<h1>Server Testing</h1>")
})

connectDB()


export default app;