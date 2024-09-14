import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  text: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
},{timestamps:true});

export const Message = mongoose.model("Message", MessageSchema);
