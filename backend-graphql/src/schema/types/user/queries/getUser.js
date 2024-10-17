import { GraphQLNonNull, GraphQLID } from 'graphql';

import { UserType } from '../typeDefs';
import usersMock from '../usersMock';

export const getUserQuery = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: async (root, { id }) => {
    return usersMock.find((user) => user.id === id);
  },
};
