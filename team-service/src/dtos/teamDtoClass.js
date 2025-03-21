class TeamDTO {
  constructor(team) {
    this.id = team._id;
    this.type = team.type;
    this.availability = team.availability;
    this.createdAt = this.formatDate(team.createdAt); // Formater la date
    this.updatedAt = this.formatDate(team.updatedAt); // Formater la date
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString();
  }
}
export default TeamDTO;
