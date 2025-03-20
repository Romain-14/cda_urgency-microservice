import Incident from "../models/Incident.js"
import Team from "../models/Team.js"

export const createIncident = async (data) => {
    // Vérification si une équipe est dispo et on sélectionne la plus ancienne en attente
    const availableTeam = await Team.findOneAndUpdate(
        {
            availability: true
        }, // Le filtre de recherche
        {
            availability: false
        },//Le champ que je veux mettre à jour, en l'occurence je change la disponibilité de l'équipe
        {
            sort: { updatedAt: 1 }
        } // Exemple :Team A prend a cloturé un incident à 14h00 => Availability : true DONC updatedAt: 14h00
        // Team B cloture un incident à 10h00 => Availability: true DONC updatedAt: 10h00
        // En réalisant le sort, il me prendra l'équipe de 10h00
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