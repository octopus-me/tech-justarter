import { GraphQLBoolean, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const ExperimentType = new GraphQLObjectType({
    name: "ExperimentType",
    description: "Experiment type for user",
    fields: () => ({
        alternative: {
            type: new GraphQLObjectType({
                name: 'Alternative',
                fields: {
                    name: {type: new GraphQLNonNull(GraphQLString)}
                }
            })
        },
        client_id: {type: new GraphQLNonNull(GraphQLString)},
        experiment: {
            type: new GraphQLObjectType({
                name: 'Experiment',
                fields: {
                    name: {type: new GraphQLNonNull(GraphQLString)}
                }
            })
        },
        experiment_group: {
            type: new GraphQLObjectType({
                name: 'Experiment_Group',
                fields: {
                    name: {type: new GraphQLNonNull(GraphQLString)}
                }
            })
        },
        participating: {type: new GraphQLNonNull(GraphQLBoolean)},
        simulating: {type: new GraphQLNonNull(GraphQLBoolean)},
        status: {type: new GraphQLNonNull(GraphQLString)}
    })
})


