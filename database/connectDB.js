import mongoose from "mongoose";

const connectDB = () =>
  mongoose
    .connect(process.env.MONGO_DB)
    .then(console.log("Connected to mongoDB"))
    .catch((err) => console.log(err));
export default connectDB;
