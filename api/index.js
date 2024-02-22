import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
dotenv.config();

mongoose
  .connect(process.env.mongo)
  .then(() => {
    console.log("Connected to DB....");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.listen(3000, () => {
  console.log("Sunucu çalışıyor..");
});

app.get("/test", (req, res) => {
  res.json({
    message: "Hello world!",
  });
});

app.use("/api/user", userRouter);
