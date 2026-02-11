import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
  avatar: String,
  bio: String,
  phone: String,
  facebook: String,
  zalo: String
});

export default mongoose.model("User", userSchema);
