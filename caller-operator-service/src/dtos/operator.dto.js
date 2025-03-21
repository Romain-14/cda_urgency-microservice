class OperatorDto {
	constructor(operator) {
		this.id = operator._id;
		this.name = operator.name;
		this.createdAt =
			new Date(operator.createdAt).toLocaleDateString() +
			" à " +
			new Date(operator.createdAt).toLocaleTimeString();
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
		return true;
	}
}

export default OperatorDto;
