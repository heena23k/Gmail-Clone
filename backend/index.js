// const express  =require('express');

// for react we use as a express
import express from  "express";
import dotenv from "dotenv"
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import userRoute from './routes/user.route.js'
dotenv.config({});
connectDB();
const app = express();
const port  = 8080;

// parse some middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.cookieParser());
const corsOption = {
    origin:'http://localhost:5173/',
    Credentials:true
}
// attach the routes
app.use("api/v1/user",userRoute)
"http://localhost:8080/api/v1/user/register"
"http://localhost:8080/api/v1/user/login"
app.use(cors(corsOption));
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
    
})

 