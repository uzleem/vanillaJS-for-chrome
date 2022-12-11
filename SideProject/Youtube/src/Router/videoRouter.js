import express from "express";
import { upload, see, edit, remove } from "../Controller/videoController";

/**
 * videoRouter 생성
 */
const videoRouter = express.Router();

/**
 * videoRouter URL
 */
videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/remove", remove);


export default videoRouter;

