import IncidentRepository from "../repositories/incidentRepository.js";
import CreateIncidentDto from "../dtos/createIncidentDto.js";
import UpdateIncidentStatusDto from "../dtos/updateIncidentStatusDto.js";

const createIncident = async (req, res) => {
    try {
        const incidentDto = new CreateIncidentDto(req.body);
        const newIncident = await IncidentRepository.createIncident(incidentDto);
        res.status(201).json(newIncident);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllIncidents = async (req, res) => {
    try {
        const incidents = await IncidentRepository.getAllIncidents();
        res.json(incidents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateIncidentStatus = async (req, res) => {
    try {
        const statusDto = new UpdateIncidentStatusDto(req.body);
        const updatedIncident = await IncidentRepository.updateIncidentStatus(req.params.id, statusDto.status);
        if (!updatedIncident) {
            return res.status(404).json({ message: "Incident non trouvé" });
        }
        res.json(updatedIncident);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export { createIncident, getAllIncidents, updateIncidentStatus }; 

