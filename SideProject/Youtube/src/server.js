/**
 * 1. npm과 NodeJS가 패키지에서 express가 나올때까지 찾아보고 나오면
 * 2. express > index.js 수행
 * 3. express/lib/express 수행
 */
import express from "express";
import morgan from "morgan";
import globalRouter from "./Router/globalRouter";
import userRouter from "./Router/userRouter";
import videoRouter from "./Router/videoRouter";

const PORT = 4000;

/**
 * express 선언
*/
const app = express();

/**
 * express 활용 서버 생성
 */
app.listen(PORT, handleListening);

/**
 * 
 * @returns app.listen 이후 callback
 */
const handleListening = () => console.log(`Server => https://localhost:${PORT}😎`);


/**
 * morgan log
 */
const logger = morgan("dev"); // common, combined, short, tiny . . .
app.use(logger);


/**
 * MiddleWare 
 */
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);