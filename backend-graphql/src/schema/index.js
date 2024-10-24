import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { types, queries, mutations } from './loader';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ...queries,
  }),
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...mutations,
  }),
});

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
  types,
});

export default schema;
