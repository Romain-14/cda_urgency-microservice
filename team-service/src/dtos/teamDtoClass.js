export class TeamDTO {
  constructor(team) {
    this.id = team._id;
    this.type = team.type;
    this.availability = team.availability;
    this.createdAt = team.createdAt;
    this.updatedAt = team.updatedAt;
  }
}
