import React from "react";
import GlobalStyled from "assets/styles/globalStyled";
import Routes from "./routes";
import { PokemonProvider } from "context/pokemonContext";

function App() {
  return (
    <>
      <PokemonProvider>
        <GlobalStyled />
        <Routes />
      </PokemonProvider>
    </>
  );
}

export default App;
