import { config } from "dotenv";
import express from 'express'
import cors from 'cors'
import connectDB from "./db/connectDB.js";
import userRouter from "./routes/userRoutes.js"
import captainRouter from "./routes/captainRoutes.js"
import cookieParser from "cookie-parser";
const app = express()

config({
    path: "./.env"
})

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
})) 
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use("/api/users", userRouter)
app.use("/api/captains", captainRouter)

connectDB()


export default app;