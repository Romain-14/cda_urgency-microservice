import OperatorDto from "../dtos/operator.dto.js";
import {
    findByName,
	findOperator,
	findOperators,
	insertOperator,
} from "../repositories/operator.repository.js";

export const createOperator = async (req, res) => {
	try {
		OperatorDto.validateInput(req.body);
        
		const existingOperator = await findByName(req.body.name);

		if (existingOperator) {
			return res
				.status(400)
				.json({ error: "Cet opérateur est déjà enregistré." });
		}

		const newOperator = await insertOperator(req.body);

		res.status(201).json({
			message: "Opérateur enregistré !",
			operator: new OperatorDto(newOperator),
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const getOperators = async (req, res) => {
	try {
		const operators = await findOperators();
        const newOperators = operators.map(operator => new OperatorDto(operator));
        
		res.status(200).json({
			message: "Liste des opérateurs récupérés !",
			newOperators,
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const getOperator = async (req, res) => {
	try {
		const operator = await findOperator(req.params.id);
		res.status(200).json({
			message: "Opérateur récupéré !",
			operator: new OperatorDto(operator),
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
