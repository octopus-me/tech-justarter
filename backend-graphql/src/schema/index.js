import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import Address from './types/address';
import User from './types/user';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ...Address.queries,
    ...User.queries,
  }),
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...Address.mutations,
    ...User.mutations,
  }),
});

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

export default schema;
