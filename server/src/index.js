const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const JokesAPI = require("./datasources/jokes");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    jokesAPI: new JokesAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
