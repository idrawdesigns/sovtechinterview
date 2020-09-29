const { gql } = require("apollo-server");

const typeDefs = gql`
  type randomJoke {
    id: String
    value: String
    url: String
  }

  type Category {
    id: ID!
    category: String
  }

  type Query {
    randomjoke(category: String): randomJoke
    categories: [Category]
  }
`;

module.exports = typeDefs;
