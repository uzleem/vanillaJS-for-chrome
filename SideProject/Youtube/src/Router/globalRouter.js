import express from "express";
import { join, login } from "../Controller/userController";
import { home, search } from "../Controller/videoController";

/**
 * globalRouter
 */
// Router 생성
const globalRouter = express.Router();

// Request(요청)
globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
