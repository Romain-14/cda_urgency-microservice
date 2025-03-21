class CreateIncidentDto {
  constructor({ description, localisation, callerId, operatorId }) {
      if (!description || !localisation || !callerId || !operatorId) {
          throw new Error("Tous les champs sont requis");
      }
      this.description = description;
      this.localisation = localisation;
      this.callerId = callerId;
      this.operatorId = operatorId;
      this.status = "pending"; // Par défaut
  }
}

export default CreateIncidentDto;

  