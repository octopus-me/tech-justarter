import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql'

export const MovementsType = new GraphQLObjectType({
    name: 'Movements',
    description: "Lawsuit movements",
    fields: () => ({
        id: { type: GraphQLID},
        date: {type: new GraphQLNonNull(GraphQLString)},
        description : {type: new GraphQLNonNull(GraphQLString)}
    })
})