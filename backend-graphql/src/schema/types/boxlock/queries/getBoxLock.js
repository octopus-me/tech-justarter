import { BoxLockType } from "../typeDefs";
import axios from "axios";

export const getBoxLockQuery = {
    type: BoxLockType,
    resolve: async () => {
        
        try {
            const response = await axios.get("http://localhost:9777/box-lock")
            
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar dados da API de box-lock")
            throw new Error("Não foi possível carregar os dados")
        }
        
    }
}