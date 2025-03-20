export const updateIncidentStatusDto = (data) => {
    const validStatuses = ["pending", "in_progress", "resolved"];
    
    if (!data.status || !validStatuses.includes(data.status)) {
      throw new Error(`Le statut est obligatoire et doit être l'un des suivants : ${validStatuses.join(", ")}`);
    }
  
    return {
      status: data.status,
    };
  };
  