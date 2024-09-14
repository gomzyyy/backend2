import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/connectDB.js";
import Routes from "./routers/router.js";
dotenv.config({});
import cors from "cors";

// constants
const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());

// testing routes

app.get("/", (req, res) => {
  res.send({
    message: "server is working",
  });
});

// routes

app.use("/user", Routes)

// server

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}/`);
  console.log(`uploading at http://localhost:${PORT}/user/upload`);
  connectDB();
});
