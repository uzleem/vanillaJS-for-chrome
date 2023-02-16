import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userShema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  passwordCheck: { type: String, required: true },
  location: String,
});

userShema.pre("save", async function () {
  console.log(`================= userShema > save =================`);
  console.log(`Input PassWord : ${this.password}`);

  this.password = await bcrypt.hash(this.password, 5);
  console.log(`Output PassWord : ${this.password}`);
});

const userModel = new mongoose.model("user", userShema);
export default userModel;
