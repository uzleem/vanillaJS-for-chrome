import mongoose from "mongoose";

const userShema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  location: String,
});

const userModel = new mongoose.model("user", userShema);
export default userModel;
