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
 * 현재 작업 디렉토리 위치 확인
 * cwd(현재 작업 디렉토리) : node.js를 실행하는 디렉토리 위치.(node.js는 packge.json을 통해 실행)
 * express는 pug를 찾을때 cwd + views 폴더에서 pug를 찾기에 현재 cwd가 어디인지 확인 
 */
// console.log(process.cwd());

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
// app.use(logger);

/**
 * express기능으로 form데이터를 인식할수 있도록 적용,
 * url을 넘어갈때는 middleWare 이후 진행되기에 middleWare 사용 전에 적용해야함
 */
app.use(express.urlencoded({extended : true}));

/**
 * MiddleWare 
 */
app.use("/", globalRouter);
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


