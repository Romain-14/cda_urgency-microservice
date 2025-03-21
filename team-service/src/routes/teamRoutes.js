import { Router } from "express";

import {
  createTeam,
  getAvaiableTeam,
  getTeams,
  updateTeamStatus,
} from "../controllers/teamController.js";

const teamRouter = Router();

//Lister toutes les Teams  //getTeams : voir dans controller
teamRouter.get("/", getTeams);
//Créer une Team
teamRouter.post("/", createTeam);
//Lister une team avaiable
teamRouter.get("/avaiable", getAvaiableTeam);
//MAJ de la dispo d'une equipe
teamRouter.patch("/upadateteamstatus/:id", updateTeamStatus);

export default teamRouter;
