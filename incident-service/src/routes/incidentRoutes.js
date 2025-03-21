import express from "express";
import { createIncident, getAllIncidents, updateIncidentStatus } from "../controllers/incidentController.js";

const router = express.Router();

router.post("/api/incidents", createIncident);
router.get("/api/incidents", getAllIncidents);
router.patch("/api/incidents/:id/status", updateIncidentStatus);

export default router;
