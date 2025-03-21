import express from 'express';
import * as incidentController from '../controllers/incidentController.js';

const router = express.Router();

router.post('/api/incidents', incidentController.createIncident);
router.get('/api/incidents', incidentController.getIncidents);
router.patch("/api/incidents/:id/status", incidentController.updateIncidentStatus);

export default router;
