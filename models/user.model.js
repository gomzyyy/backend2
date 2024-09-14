import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
    },
    userName: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    emailId: {
      type: String,
      required: [true, "emailId is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    gender: {
      type: String,
      required: [true, "gender is required"],
      enum: ["male", "female", "others"],
    },
    profilePhoto: {
      type: String,
      default: "",
    },
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
    sentMedia: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SentMedia",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", UserSchema);
