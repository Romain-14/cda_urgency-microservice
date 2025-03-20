import Team from "../models/Team.js";

export const createTeam = async (data) => {
  return await Team.create(data);
};

export const getAllTeams = async () => {
  return await Team.find({});
};

export const getOneAvaiableTeam = async () => {
  return await Team.findOne({ availability: true }) // On filtre sur les équipes disponibles
    .sort({ updatedAt: 1 }) // Trie par updatedAt croissant (du plus ancien au plus récent)
    .limit(1); // Récupère une seule équipe
};

export const updateThatTeamStatus = async (teamId, availability) => {
  return await Team.findByIdAndUpdate(teamId, { availability }, { new: true });
};
