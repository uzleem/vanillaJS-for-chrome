import express from "express";

/**
 * videoRouter
 */
const videoRouter = express.Router();

const watch = (req, res) => res.send("watch Page!");

videoRouter.get("/watch", watch);

export default videoRouter;