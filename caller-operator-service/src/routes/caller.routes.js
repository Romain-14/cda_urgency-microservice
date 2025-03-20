import { Router } from "express";

import {
	createCaller,
	getCallers,
	getCaller,
} from "../controllers/caller.controller.js";

const router = Router();

router.post("/", createCaller);
router.get("/", getCallers);
router.get("/:id", getCaller);

export default router;
