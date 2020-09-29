module.exports = {
  Query: {
    categories: async (_, __, { dataSources }) =>
      dataSources.jokesAPI.getAllJokesCategories(),

    randomjoke: async (_, { category }, { dataSources }) => {
      return dataSources.jokesAPI.getRandomJokeByCategory(category);
    },
  },
};
