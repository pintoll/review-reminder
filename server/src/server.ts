import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const PORT = process.env.PORT || 4000;

const typeDefs = `#graphql
  type Query {
    ping: String
  }
`;

const resolvers = {
  Query: {
    ping: () => "👋pong!👋",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
};

startServer();
