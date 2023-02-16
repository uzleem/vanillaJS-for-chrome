import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../Controller/userController";
import { home, search } from "../Controller/videoController";

/**
 * rootRouter
 */
// Router 생성
const rootRouter = express.Router();

// Request(요청)
rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.get("/search", search);

export default rootRouter;
