import React, { useReducer } from "react";
import { useQuery } from "@apollo/client";

import { GET_RANDOM_JOKE } from "../graphql/queries";

const GetRandomJokeContext = React.createContext({ id: null, value: "" });

const initialState = {
  category: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        category: action.payload,
      };

    default:
      return state;
  }
};

export const GetRandomJokeProvider = (props) => {
  const [{ category }, dispatch] = useReducer(reducer, initialState);

  const { loading, error, data } = useQuery(GET_RANDOM_JOKE, {
    variables: { category },
  });

  console.log("reducer", category);
  return (
    <GetRandomJokeContext.Provider value={{ loading, data, error, dispatch }}>
      {props.children}
    </GetRandomJokeContext.Provider>
  );
};

export default GetRandomJokeContext;
