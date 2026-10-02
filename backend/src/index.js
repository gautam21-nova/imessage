import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/clerk-sdk-node";
import "dotenv/config"
import User from "./models/user.model.js";
import connectDB from "./lib/db.js";

const PORT = process.env.PORT
const FRONTEND_URL = process.env.FRONTEND_URL


const app = express();

//parse incoming requests with JSON payloads
app.use(express.json())
//allow cross-origin requests from any domain
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
//use clerk middleware to handle authentication and authorization
app.use(clerkMiddleware());


app.get('/',(req,res)=>{
    res.status(200).json({message:"server is running..."});
});

console.log()
app.listen(PORT,()=>{
    connectDB(process.env.DB_STRING);
    console.log(`connection build sucessfully...\n on port: ${PORT}`);
})