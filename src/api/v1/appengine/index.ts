import { Router } from "express";
import { AppEngineController } from "../../../controllers/v1/appengine";
const ctrl = new AppEngineController();
const router = Router();

router.post("/:projectId", ctrl.create.bind(ctrl));
router.post("/:projectId/getapp", ctrl.get.bind(ctrl));

export { router as appengineRouter };
