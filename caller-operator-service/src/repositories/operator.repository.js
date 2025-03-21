import Operator from "../models/Operator.model.js";

export const insertOperator = async (data) => {
	return await Operator.create(data);
};

export const findOperators = async () => {
	return await Operator.find({});
};

export const findOperator = async (id) => {
	return await Operator.findOne({ _id: id });
};

export const findByName = async (name) => {
	return await Operator.findOne({ name });
};
