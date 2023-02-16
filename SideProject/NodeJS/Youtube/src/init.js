import "./db";
import "./model/video"
import app from "./server";
const PORT = 4000;

/**
 * express 활용 서버 생성
 */
app.listen(PORT, handleListening);

/**
 * 
 * @returns app.listen 이후 callback
 */
const handleListening = () => console.log(`Server => https://localhost:${PORT}😎`);