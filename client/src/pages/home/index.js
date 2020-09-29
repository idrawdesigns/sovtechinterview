import React, { useContext } from "react";

//styles
import { Container } from "./home.styles";

import CategoriesContext from "../../context/CategoryContext";

//components
import { Hero, SelectBtn, Joke } from "../../components";

const HomePage = () => {
  const {
    loading: categoryLoading,
    data: categoryData,
    error: categoryError,
  } = useContext(CategoriesContext);

  return (
    <div>
      <Hero />
      <Container>
        <SelectBtn
          loading={categoryLoading}
          data={categoryData}
          error={categoryError}
        />
        <Joke />
      </Container>
    </div>
  );
};

export default HomePage;
