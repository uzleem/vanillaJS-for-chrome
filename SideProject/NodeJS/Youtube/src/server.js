/**
 * 1. npm과 NodeJS가 패키지에서 express가 나올때까지 찾아보고 나오면
 * 2. express > index.js 수행
 * 3. express/lib/express 수행
 */
import express from "express";
import morgan from "morgan";

/** session은 항상 Router이전에 사용해야함 */
import session from "express-session";
import rootRouter from "./Router/rootRouter";
import userRouter from "./Router/userRouter";
import videoRouter from "./Router/videoRouter";
import { middleWare } from "../middleware";

const app = express();
export default app;
/**
 * morgan log : return시 해당 log가 어디인지 알려주는 역할
 */
const logger = morgan("dev"); // common, combined, short, tiny . . .
app.use(logger);

/**
 * express기능으로 form데이터를 인식할수 있도록 적용,
 * url을 넘어갈때는 middleWare 이후 진행되기에 middleWare 사용 전에 적용해야함
 */
app.use(express.urlencoded({ extended: true }));

/**
 * cookies 전송
 */
app.use(
  session({
    secret: "Hi! Session",
    resave: true,
    saveUninitialized: true,
    provide: true,
  })
);

/**
 * USER요청 cookies 확인
 */
// app.use((req, res, next) => {
//   /**
//    * 1. res의 locals 정보확인 : locals: [Object: null prototype] {},
//    * 2. locals Objects는 빈 값
//    * 3. 2.에 해당하는 Object 값 저장
//    * 4. pug에서 Object값을 인식
//    */
//   //   console.log(res);

//   res.locals.test = "testData";

//   // 요청받은 전체 session정보 확인
//   req.sessionStore.all((error, session) => {
//     console.log(session);
//     next();
//   });
// });

/** cookies 테스트 
app.get("/testURL", (req, res, next) => {
  //   return res.send(`${req.session.id}`);
  return res.send(req.session.id);
});
*/

/**
 * MiddleWare
 */
app.use(middleWare);
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
