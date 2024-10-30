import { GraphQLNonNull, GraphQLString } from "graphql";
import { LawsuitType } from "../typeDefs";

import lawsuitsMock from '../lawsuitsMock';

export const getLawsuitQuery = {
    type: LawsuitType,
    args: {
        numero: {type: new GraphQLNonNull(GraphQLString)},
    },
    resolve: async(_,{ numero }) => {
        return lawsuitsMock.find((lawsuit) => lawsuit.numero === numero);
    }
}