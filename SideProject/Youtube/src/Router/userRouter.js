import express from "express";
import { see, logout, edit, remove } from "../Controller/userController";


/**
 * userRouter 생성
 */
const userRouter = express.Router();

/**
 * userRouter URL
 */
userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/:id(\\d+)", see);

export default userRouter;