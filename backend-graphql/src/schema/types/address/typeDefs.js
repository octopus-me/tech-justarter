import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql';

export const AddressType = new GraphQLObjectType({
  name: 'Address',
  description: 'Address type definition',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    street: { type: new GraphQLNonNull(GraphQLString) },
    number: { type: new GraphQLNonNull(GraphQLInt) },
    city: { type: new GraphQLNonNull(GraphQLString) },
    state: { type: new GraphQLNonNull(GraphQLString) },
    country: { type: new GraphQLNonNull(GraphQLString) },
    postalCode: { type: GraphQLString },
  }),
});
