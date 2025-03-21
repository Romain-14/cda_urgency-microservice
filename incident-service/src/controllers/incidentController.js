import { updateIncidentStatus } from "../repositories/incidentRepository.js";
import { fetchIncidents, reportIncident } from "../services/incidentService.js"

export const createIncident = async (req, res) => {
    try {
        const { description, localisation, operatorId, callerId } = req.body

        const newIncident = await reportIncident(description, localisation, operatorId, callerId);

        res.status(200).json({ message: "Incident crée avec succès", incident: newIncident })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getIncidents = async (req, res) => {
    try {
        const incidents = await fetchIncidents();
        res.status(200).json(incidents)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const editStatusIncident = async (req, res) => {
    try {

        const { id } = req.params;
        const { status } = req.body;

        const editStatusIncident = await updateIncidentStatus(id, status)

        res.status(200).json({ message: "Status MAJ avec succès", incident: editStatusIncident })

    } catch (err) {
        res.status(500).json({ error: err.message })

    }
}
