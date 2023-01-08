import mongoose from "mongoose";

// strictQuery 경고 방지
const connect = () => {
    mongoose
    .connect("mongodb://127.0.0.1:27017/youtube")
    .catch(err => console.log(err));
};
// mongoose.connect("mongodb://127.0.0.1:27017/youtube").catch(err => console.log(err));

const db = mongoose.connection;

const handleOpen = () => console.log("Connection to DB 🔥");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", (handleError));
db.once("open", (handleOpen));