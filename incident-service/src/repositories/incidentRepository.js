import Incident from "../models/Incident.js";

class IncidentRepository {
    async createIncident(incidentData) {
        const incident = new Incident(incidentData);
        return await incident.save();
    }

    async getAllIncidents() {
        return await Incident.find();
    }

    async getIncidentById(id) {
        return await Incident.findById(id);
    }

    async updateIncidentStatus(id, status) {
        return await Incident.findByIdAndUpdate(id, { status }, { new: true });
    }
}

export default new IncidentRepository();
