// const express = require("express"); we are not using common js script instead we are using es modules
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDb.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse form data(urlencoded)
app.use(cookieParser());

// Load environment variables from .env file into process.env
dotenv.config();
// Global accessibility: Once environment variables are loaded into process.env,
// they become accessible globally throughout the Node.js application.
// This means that if environment variables are loaded in an entry point like server.js, they can be accessed from any file in the application without the need to explicitly load them again using dotenv.config().

const PORT = process.env.PORT || 8000;

//authRoutes is the middleware function
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("server is fine!");
  connectMongoDB();
});
