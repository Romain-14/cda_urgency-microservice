import { Router } from "express";

import {
	createOperator,
	getOperators,
	getOperator,
} from "../controllers/operator.controller.js";

const router = Router();

router.post("/", createOperator);
router.get("/", getOperators);
router.get("/:id", getOperator);

export default router;
