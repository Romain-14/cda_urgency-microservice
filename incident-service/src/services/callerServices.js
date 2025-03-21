import axios from "axios";

const CALLER_OPERATOR_SERVICE_URL = process.env.CALLER_OPERATOR_SERVICE_URL || "http://localhost:3001";


export const verifyCallerExists = async (callerId) => {
  try {
    const response = await axios.get(`${CALLER_OPERATOR_SERVICE_URL}/api/callers/${callerId}`);
    return response.data; 
  } catch (error) {
    console.error(`Erreur lors de la vérification de l'appelant ${callerId}:`, error.message);
    throw new Error("Appelant introuvable");
  }
  
};


export const verifyOperatorExists = async (operatorId) => {
  try {
    const response = await axios.get(`${CALLER_OPERATOR_SERVICE_URL}/api/operators/${operatorId}`);
    return response.data; 
  } catch (error) {
    console.error(`Erreur lors de la vérification de l'opérateur ${operatorId}:`, error.message);
    throw new Error("Opérateur introuvable");
  }
};
