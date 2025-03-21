import CallerDto from "../dtos/caller.dto.js";
import {
	findByName,
	findCaller,
	findCallers,
	insertCaller,
} from "../repositories/caller.repository.js";

export const createCaller = async (req, res) => {
	try {
		CallerDto.validateInput(req.body);

		const existingCaller = await findByName(req.body.name);
		if (existingCaller) {
			return res
				.status(400)
				.json({ error: "Cette personne est déjà enregistrée." });
		}

		const newCaller = await insertCaller(req.body);

		res.status(201).json({
			message: "Personne enregistrée !",
			caller: new CallerDto(newCaller),
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const getCallers = async (req, res) => {
	try {
		const callers = await findCallers();
		const newCallers = callers.map((caller) => new CallerDto(caller));
        
		res.status(200).json({
			message: "Liste des personnes récupérés !",
			newCallers,
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const getCaller = async (req, res) => {
	try {
		const caller = await findCaller(req.params.id);
		res.status(200).json({
			message: "Personne récupérée !",
			caller: new CallerDto(caller),
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
