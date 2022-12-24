import express from "express";
import { join, login} from "../Controller/userController";
import { home } from "../Controller/videoController";

/**
 * globalRouter
 */
// Router 생성
const globalRouter = express.Router();

// Request(요청)
globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
