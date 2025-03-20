import {
  createNewTeam,
  fetchAvaiableTeam,
  fetchTeams,
  updateTheTeamStatus,
} from "../dtos/teamDto.js";

export const createTeam = async (req, res) => {
  try {
    const { type } = req.body;

    const newTeam = await createNewTeam(type);

    res.status(200).json({ message: "Team create with sucess", team: newTeam });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTeams = async (req, res) => {
  try {
    //Fait reference à service (DTO dans cette archi)
    const teams = await fetchTeams();
    res.status(200).json(teams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAvaiableTeam = async (req, res) => {
  try {
    const avaiableTeam = await fetchAvaiableTeam();
    res.status(200).json(avaiableTeam);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateTeamStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { availability } = req.body;

    if (typeof availability !== "boolean") {
      return res.status(400).json({ error: "Invalid availability value" });
    }

    const updatedTeam = await updateTheTeamStatus(id, availability);

    if (!updatedTeam) {
      return res.status(404).json({ error: "Team not found" });
    }

    res.status(200).json(updatedTeam);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
