import express from "express";

/**
 * userRouter
 */
const userRouter = express.Router();

const edit = (req, res) => res.send("edit Page!");

userRouter.get("/edit", edit);

export default userRouter;