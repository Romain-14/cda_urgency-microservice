import { createIncidentDto } from "./createIncidentDto.js";
import { updateIncidentStatusDto } from "./updateIncidentStatusDto.js";

export { createIncidentDto, updateIncidentStatusDto };

/*
INSERTOIN d'une classe ????

class IncidentDto {
  constructor(incident) {
    this.id = incident._id;
    this.localisation = incident.localisation;
    this.description = incident.description;
    this.status = incident.status;
    this.callerId = incident.callerId;
    this.operatorId = incident.operatorId;
    this.teamId = incident.teamId;
    this.createdAt = incident.createdAt;
    this.updatedAt = incident.updatedAt;
  }

  // Méthode statique pour valider les données entrantes
  static validateInput(data) {
    if (!data.localisation || typeof data.localisation !== "string") {
      throw new Error("Le champ 'localisation' est invalide.");
    }
    if (!data.description || typeof data.description !== "string") {
      throw new Error("Le champ 'description' est invalide.");
    }
    if (!data.callerId || typeof data.callerId !== "string") {
      throw new Error("Le champ 'callerId' est invalide.");
    }
    if (!data.operatorId || typeof data.operatorId !== "string") {
      throw new Error("Le champ 'operatorId' est invalide.");
    }
    return true;
  }
}

export default IncidentDto;

*/