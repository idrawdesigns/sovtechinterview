import React from "react";

//globalstyles
import GlobalStyle from "./globalstyles";

//pages
import HomePage from "./pages/home";

//Provider

import { CategoriesProvider } from "./context/CategoryContext";

import { GetRandomJokeProvider } from "./context/RandomJokeContext";

function App() {
  return (
    <>
      <CategoriesProvider>
        <GetRandomJokeProvider>
          <GlobalStyle />
          <HomePage />
        </GetRandomJokeProvider>
      </CategoriesProvider>
    </>
  );
}

export default App;
