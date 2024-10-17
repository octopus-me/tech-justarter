import { GraphQLNonNull } from 'graphql';

import { UserType, CreateUserInput } from '../typeDefs';
import usersMock from '../usersMock';

export const createUserMutation = {
  type: UserType,
  args: {
    user: { type: new GraphQLNonNull(CreateUserInput) },
  },
  resolve: async (_, args) => {
    const user = {
      id: String(usersMock.length + 1),
      ...args.user,
    };

    usersMock.push(user);

    return user;
  },
};
