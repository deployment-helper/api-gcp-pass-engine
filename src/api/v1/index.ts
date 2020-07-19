import { Router } from "express";
import { appengineRouter } from "./appengine";
import { healthRouter } from "./health";
const router = Router();
router.use("/appengine", appengineRouter);
router.use("/health", healthRouter);

export { router as v1Router };
