import { GraphQLNonNull, GraphQLString } from "graphql";
import { LawsuitType } from "../typeDefs";
import axios from 'axios';

import lawsuitsMock from '../lawsuitsMock';

export const getLawsuitQuery = {
    type: LawsuitType,
    args: {
        numero: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve: async(_,{ numero }) => {
        console.log("Chegou AQUI");
        try {
            console.log("chegou aqui 2");
            const response = await axios.post('http://127.0.0.1:8000/search',{
                query: numero,
                filters: {},
                limit: 10,
                offset: 0
            });


            const lawsuitData = response.data.lawsuits;


            const valor =  lawsuitData.lawyers.map(lawyer => lawyer.name )

            console.log(valor)


            return {
                id: lawsuitData.number,
                numero: lawsuitData.number,
                tribunal : lawsuitData.court,
                dataInicio : lawsuitData.date,
                movimentos : lawsuitData.activities.map(activity => ({
                    date: activity.date,
                    description: activity.description
                })),
                partes: {
                    autor : lawsuitData.related_people.filter(person => person.role=="Autor")[0].name,
                    reu : lawsuitData.related_people.filter(person => person.role=="Réu")[0].name
                },
                advogados : lawsuitData.lawyers.map(lawyer => lawyer.name ),
                juiz : lawsuitData.judge,
                assunto : lawsuitData.subject,
                valor: lawsuitData.value
            }
        } catch (error) {
            console.error("Erro ao buscar processo: ", error);
            throw new Error("Erro ao buscar processo");
        }
    }
};