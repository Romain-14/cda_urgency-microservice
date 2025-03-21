class CallerDto {
	constructor(caller) {
		this.id = caller._id;
		this.name = caller.name;
		this.phone = caller.phone;
		this.createdAt = caller.createdAt;
	}

	static validateInput(data) {
		if (!data.name || typeof data.name !== "string") {
			throw new Error("Le champ 'name' est invalide.");
		}
		if (!data.phone || typeof data.phone !== "string" || data.phone.length < 10) {
			throw new Error("Le champ 'phone' est invalide.");
		}
		return true;
	}
}

export default CallerDto;
