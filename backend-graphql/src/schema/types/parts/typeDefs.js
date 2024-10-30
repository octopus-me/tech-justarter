import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const PartsType = new GraphQLObjectType({
    name: 'Parts',
    description: 'Partes envolvidas no processo - Autor e Réu',
    fields: () => ({
        autor : {type: new GraphQLNonNull(GraphQLString)},
        reu : {type: new GraphQLNonNull(GraphQLString)}
    })
})