import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";

dotenv.config();

//Mongo db connection
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on 3000!");
});
