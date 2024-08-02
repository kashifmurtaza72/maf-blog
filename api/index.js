import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser'
dotenv.config();

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";



mongoose
  .connect(process.env.MONGOOSE)
  .then(() => {
    console.log("Mongoose db is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is listening on the port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// app.get("/test", (req, res) => {
//     res.json({message: "API is working successfully"})
// })

app.use("/api/user/", userRoutes);

app.use("/api/auth/", authRoutes);

app.use((err, req, res, next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success : false,
    statusCode,
    message
  });
});
