import mongoose from "mongoose";

// mongoose 연결
mongoose.connect("mongodb://127.0.0.1:27017/youtube").catch(err => console.log(err));

const db = mongoose.connection;

const handleOpen = () => console.log("Connection to DB 🔥");
const handleError = (error) => console.log("❌ DB Error", error);

// on : 실행
db.on("error", (handleError));

// once : 최초실행
db.once("open", (handleOpen));