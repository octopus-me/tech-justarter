import { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLNonNull, 
    GraphQLList,
    GraphQLFloat
} from "graphql";

import { MovementsType } from "../movements/typeDefs";
import { PartsType } from "../parts/typeDefs";

export const LawsuitType = new GraphQLObjectType({
    name: 'Lawsuit',
    description: 'Lawsuit type definition',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLID)},
        numero: {type: new GraphQLNonNull(GraphQLString)},
        tribunal : {type: new GraphQLNonNull(GraphQLString)},
        dataInicio : {type: GraphQLString},
        movimentos: {type: new GraphQLList(MovementsType)},
        partes : {type: new GraphQLNonNull(PartsType)},
        assunto : {type : GraphQLString},
        juiz: {type: GraphQLString},
        advogados : {type: new GraphQLList(GraphQLString)},
        valor : {type: GraphQLFloat}
    })
})