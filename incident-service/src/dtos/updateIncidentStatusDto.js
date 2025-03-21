class UpdateIncidentStatusDto {
  constructor({ status }) {
      const allowedStatuses = ["pending", "in-progress", "resolved"];
      if (!allowedStatuses.includes(status)) {
          throw new Error("Statut invalide");
      }
      this.status = status;
  }
}

export default UpdateIncidentStatusDto;
