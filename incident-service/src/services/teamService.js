import axios from "axios";

const TEAM_SERVICE_URL = process.env.TEAM_SERVICE_URL || "http://localhost:3002";

export const getAvailableTeam = async () => {
  try {
    const response = await axios.get(`${TEAM_SERVICE_URL}/api/teams/available`);
    return response.data; 
  } catch (error) {
    console.error("Erreur lors de la récupération d'une équipe disponible :", error.message);
    throw new Error("Aucune équipe disponible");
  }
};


export const markTeamUnavailable = async (teamId) => {
  try {
    const response = await axios.patch(`${TEAM_SERVICE_URL}/api/teams/${teamId}`, { availability: false });
    return response.data; 
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de la disponibilité de l'équipe ${teamId}:`, error.message);
    throw new Error(`Impossible de marquer l'équipe ${teamId} comme indisponible`);
  }
};


export const releaseTeam = async (teamId) => {
  try {
    const response = await axios.patch(`${TEAM_SERVICE_URL}/api/teams/${teamId}`, { availability: true });
    return response.data; 
  } catch (error) {
    console.error(`Erreur lors de la libération de l'équipe ${teamId}:`, error.message);
    throw new Error(`Impossible de libérer l'équipe ${teamId}`);
  }
};
