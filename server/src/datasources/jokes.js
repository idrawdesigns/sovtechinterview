const { RESTDataSource } = require("apollo-datasource-rest");

const { v4: uuidv4 } = require("uuid");

// https://api.chucknorris.io/jokes/categories

class JokesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.chucknorris.io/jokes/";
  }

  async getAllJokesCategories() {
    const response = await this.get("categories");
    return Array.isArray(response)
      ? response.map((category) => this.categoryReducer(category))
      : [];
  }

  categoryReducer(category) {
    return {
      id: uuidv4(),
      category,
    };
  }

  async getRandomJokeByCategory(category) {
    return this.get(`random?category=${category}`);
  }
}

module.exports = JokesAPI;
