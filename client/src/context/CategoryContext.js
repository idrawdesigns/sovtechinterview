import React from "react";
import { useQuery } from "@apollo/client";

import { GET_CATEGORIES } from "../graphql/queries";

const CategoriesContext = React.createContext({
  data: [],
});

export const CategoriesProvider = (props) => {
  const { loading, data, error } = useQuery(GET_CATEGORIES);

  return (
    <CategoriesContext.Provider value={{ loading, data, error }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContext;
