import { ExperimentType } from "../typeDefs";
import axios from "axios";


export const getExperimentQuery = {
    type: ExperimentType,
    resolve: async () => {
        try {
            const response = await axios.get("http://localhost:9777/experiment/participate");
            return response.data;
        } catch (error) {
            console.errror("Erro ao buscar dados da API de experimentos");
            throw new Error("Não foi possível carregar dados do experimento");
        }
    }
}