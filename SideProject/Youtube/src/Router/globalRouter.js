import express from "express";

/**
 * globalRouter
 */
// Router 생성
const globalRouter = express.Router();

// Responce(응답)
const home = (req, res) => res.send("Home!");

// Request(요청)
globalRouter.get("/", home);

export default globalRouter;
