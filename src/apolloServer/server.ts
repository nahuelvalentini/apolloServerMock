import { ApolloServer, BaseContext } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from '../schema.graphql';
import { resolvers } from '../resolvers';
import { typeDefs as scalarTypeDefs } from 'graphql-scalars';

const server = new ApolloServer<BaseContext>({
  typeDefs: [typeDefs, scalarTypeDefs],
  resolvers,
});

export const initserver = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  const { log } = console;
  log(`🚀  Server ready at: ${url}`);
};
