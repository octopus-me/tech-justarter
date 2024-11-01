import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLScalarType, GraphQLString } from "graphql";

export const BoxLockType = new GraphQLObjectType({
    name: 'BoxLock',
    description: 'Box lock subscription type definition',
    fields: () => ({
        header: {
            type: new GraphQLObjectType({
                name: 'Header',
                fields: {
                    title: {type: new GraphQLNonNull(GraphQLString)},
                    subtitle: {type: GraphQLString}
                }
            })
        },
        body: {
            type: new GraphQLObjectType({
                name: 'Body',
                fields: {
                    benefits: {type: new GraphQLList(GraphQLString)},
                    price: {
                        type: new GraphQLObjectType({
                            name: 'Price',
                            fields: {
                                current: {type: GraphQLString},
                                next: {type: GraphQLString},
                                period: {type: GraphQLString}
                            }
                        })
                    },
                    button: {
                        type: new GraphQLObjectType({
                            name: 'Button',
                            fields: {
                                label: {type: GraphQLString}
                            }
                        })
                    }
                }
            })
        },
        footer: {
            type: new GraphQLObjectType({
                name: 'Footer',
                fields: {
                    text: {type: GraphQLString}
                }
            })
        }
    })
});