import express from "express";
import { getJoin, postJoin, login } from "../Controller/userController";
import { home, search } from "../Controller/videoController";

/**
 * rootRouter
 */
// Router 생성
const rootRouter = express.Router();

// Request(요청)
rootRouter.get("/", home);
rootRouter.get("/join", getJoin).post("/join", postJoin);
rootRouter.get("/login", login);
rootRouter.get("/search", search);

export default rootRouter;
