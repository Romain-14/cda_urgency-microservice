import Caller from "../models/Caller.model.js";

export const insertCaller = async (data) => {
	return await Caller.create(data);
};

export const findCallers = async () => {
	return await Caller.find({});
};

export const findCaller = async (id) => {
    return await Caller.findOne({ _id: id });
};

export const findByName = async (name) => {
    return await Caller.findOne({ name });
};
