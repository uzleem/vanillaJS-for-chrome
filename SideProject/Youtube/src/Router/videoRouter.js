import express from "express";
import { watch, getEdit, postEdit, remove, getUpload, postUpload } from "../Controller/videoController";

/**
 * videoRouter 생성
 */
const videoRouter = express.Router();

/**
 * videoRouter URL
 */
videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id(\\d+)/remove", remove);


export default videoRouter;

