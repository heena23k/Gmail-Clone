import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from './routes/user.route.js';
import emailRoute from './routes/email.route.js'

dotenv.config();
connectDB();

const app = express();
const port = 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser()); // ✅ call it
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true // ✅ lowercase
}));

// Routes
app.use("/api/v1/user", userRoute); // ✅ fixed path
app.use("/api/v1/rmail", emailRoute); // ✅ fixed path

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
