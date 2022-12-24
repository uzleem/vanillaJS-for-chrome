import express from "express";
import { watch, getEdit, postEdit, remove } from "../Controller/videoController";

/**
 * videoRouter 생성
 */
const videoRouter = express.Router();

/**
 * videoRouter URL
 */
videoRouter.get("/:id(\\d+)", watch);
// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id(\\d+)/remove", remove);


export default videoRouter;

