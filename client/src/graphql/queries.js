import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      category
    }
  }
`;

export const GET_RANDOM_JOKE = gql`
  query GetRandomJoke($category: String!) {
    randomjoke(category: $category) {
      id
      value
    }
  }
`;
