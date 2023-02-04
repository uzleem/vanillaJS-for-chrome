/**
 * 1. npm과 NodeJS가 패키지에서 express가 나올때까지 찾아보고 나오면
 * 2. express > index.js 수행
 * 3. express/lib/express 수행
 */
import express from "express";
import morgan from "morgan";
import rootRouter from "./Router/rootRouter";
import userRouter from "./Router/userRouter";
import videoRouter from "./Router/videoRouter";

const app = express();
export default app;
/**
 * morgan log
 */
const logger = morgan("dev"); // common, combined, short, tiny . . .
app.use(logger);

/**
 * express기능으로 form데이터를 인식할수 있도록 적용,
 * url을 넘어갈때는 middleWare 이후 진행되기에 middleWare 사용 전에 적용해야함
 */
app.use(express.urlencoded({ extended: true }));

/**
 * MiddleWare
 */
app.use("/", rootRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

/**
 * Pug(View engine설정)
 */
app.set("view engine", "pug");

/**
 * Pug dafault : cwd(현재 디렉토리)
 * + /src/views : 원하는 위치 경로설정
 */
app.set("views", process.cwd() + "/src/views");
