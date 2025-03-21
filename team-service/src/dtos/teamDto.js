// import {
//   createTeam,
//   getAllTeams,
//   getOneAvaiableTeam,
//   updateThatTeamStatus,
// } from "../repositories/teamRepository.js";

// export const createNewTeam = async (type) => {
//   return await createTeam({ type });
// };

// export const fetchTeams = async () => {
//   //Fait référence au repository
//   return await getAllTeams();
// };

// export const fetchAvaiableTeam = async () => {
//   return await getOneAvaiableTeam();
// };

// export const updateTheTeamStatus = async (teamId, availability) => {
//   return await updateThatTeamStatus(teamId, availability);
// };
import {
  createTeam,
  getAllTeams,
  getOneAvaiableTeam,
  updateThatTeamStatus,
} from "../repositories/teamRepository.js";
import TeamDTO from "./teamDtoClass.js"; // Import du DTO

export const createNewTeam = async (type) => {
  const newTeam = await createTeam({ type });
  return new TeamDTO(newTeam); // Transformation en DTO
};

export const fetchTeams = async () => {
  const teams = await getAllTeams();
  return teams.map((team) => new TeamDTO(team));
};

export const fetchAvaiableTeam = async () => {
  const team = await getOneAvaiableTeam();
  return team ? new TeamDTO(team) : null; // Transformation en DTO si trouvé
};

export const updateTheTeamStatus = async (teamId, availability) => {
  const updatedTeam = await updateThatTeamStatus(teamId, availability);
  return updatedTeam ? new TeamDTO(updatedTeam) : null; // Transformation en DTO si trouvé
};
