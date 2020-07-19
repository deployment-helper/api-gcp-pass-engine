import { Router } from "express";
import { AppEngineController } from "../../../controllers/v1/appengine";
const ctrl = new AppEngineController();
const router = Router();

router.post("/", ctrl.create.bind(ctrl));
router.get("/", ctrl.get.bind(ctrl));

export { router as appengineRouter };
