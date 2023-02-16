import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  remove,
  getUpload,
  postUpload,
} from "../Controller/videoController";

/**
 * videoRouter 생성
 */
const videoRouter = express.Router();

/**
 * videoRouter URL
 */
videoRouter.get("/:id([0-9a-zA-Z]{24})", watch);
videoRouter.route("/:id([0-9a-zA-Z]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id([0-9a-zA-Z]{24})/remove", remove);

export default videoRouter;
