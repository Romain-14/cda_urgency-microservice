import Incident from "../models/Incident.js"
import Team from "../models/Team.js"

export const createIncident = async (data) => {
    
    const availableTeam = await Team.findOneAndUpdate(
        {
            availability: true
        }, 
        {
            availability: false
        },
        {
            sort: { updatedAt: 1 }
        } 
    )

    if (!availableTeam) {
        throw new Error("No available teams to assign to the incident")
    }

    return await Incident.create({ ...data, teamId: availableTeam._id, status: "pending" })

}

export const getAllIncidents = async () => {
    return await Incident.find().populate("callerId", "-phone -createdAt -updatedAt -__v -_id").populate("operatorId")
        .populate("teamId", "-createdAt -updatedAt -__v -_id")
}

export const updateIncidentStatus = async (id, status) => {
    const incident = await Incident.findByIdAndUpdate(id, { status }, { new: true }).populate("operatorId teamId callerId")

    if (status === "resolved" && incident.teamId) {
        await Team.findByIdAndUpdate(incident.teamId, { availability: true })
    }

    return incident

}