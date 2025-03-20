export const createIncidentDto = (data) => {
    if (!data.localisation || typeof data.localisation !== "string") {
      throw new Error("La localisation est obligatoire et doit être une chaîne de caractères.");
    }
    if (!data.description || typeof data.description !== "string") {
      throw new Error("La description est obligatoire et doit être une chaîne de caractères.");
    }
    if (!data.callerId || typeof data.callerId !== "string") {
      throw new Error("L'ID de l'appelant est obligatoire et doit être une chaîne de caractères.");
    }
    if (!data.operatorId || typeof data.operatorId !== "string") {
      throw new Error("L'ID de l'opérateur est obligatoire et doit être une chaîne de caractères.");
    }
  
    return {
      localisation: data.localisation,
      description: data.description,
      callerId: data.callerId,
      operatorId: data.operatorId,
    };
  };
  