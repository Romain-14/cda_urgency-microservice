import Incident from "../models/Incident.js";
import axios from "axios";

const CALLER_OPERATOR_SERVICE_URL = process.env.CALLER_OPERATOR_SERVICE_URL || "http://localhost:3001";
const TEAM_SERVICE_URL = process.env.TEAM_SERVICE_URL || "http://localhost:3002";


export const reportIncident = async (description, localisation, operatorId, callerId) => {
  try {
   
    const callerResponse = await axios.get(`${CALLER_OPERATOR_SERVICE_URL}/api/callers/${callerId}`);
    if (!callerResponse.data) throw new Error("Appelant introuvable");

    
    const operatorResponse = await axios.get(`${CALLER_OPERATOR_SERVICE_URL}/api/operators/${operatorId}`);
    if (!operatorResponse.data) throw new Error("Opérateur introuvable");

    
    const teamResponse = await axios.get(`${TEAM_SERVICE_URL}/api/teams/available`);
    const team = teamResponse.data;
    if (!team) throw new Error("Aucune équipe disponible");

    
    const newIncident = new Incident({
      description,
      localisation,
      operatorId,
      callerId,
      teamId: team.id,
      status: "pending",
    });

    await newIncident.save();

    
    await axios.patch(`${TEAM_SERVICE_URL}/api/teams/${team.id}`, { availability: false });

    return newIncident;
  } catch (error) {
    throw error;
  }
};


export const fetchIncidents = async () => {
  try {
    const incidents = await Incident.find().populate("callerId operatorId teamId");
    return incidents;
  } catch (error) {
    throw error;
  }
};
