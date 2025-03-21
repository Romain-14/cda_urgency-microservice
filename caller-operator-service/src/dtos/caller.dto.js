class CallerDto {
	constructor(caller) {
		this.id = caller._id;
		this.name = caller.name;
		this.phone = caller.phone;
		this.createdAt =
			new Date(caller.createdAt).toLocaleDateString() +
			" à " +
			new Date(caller.createdAt).toLocaleTimeString();
	}

	static validateInput(data) {
		if (
			!data.name ||
			typeof data.name !== "string" ||
			data.name.length < 2 ||
			data.name.length > 255
		) {
			throw new Error("Le champ 'name' est invalide.");
		}
		if (
			!data.phone ||
			typeof data.phone !== "string" ||
			data.phone.length < 10
		) {
			throw new Error("Le champ 'phone' est invalide.");
		}
		return true;
	}
}

export default CallerDto;
