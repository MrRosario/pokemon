import React, { createContext, useState } from "react";

const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
  const [newPokemon, setNewPokemon] = useState(null);
  const [storedPokemons, setStoredPokemon] = useState([]);

  return (
    <PokemonContext.Provider
      value={{ setNewPokemon, newPokemon, setStoredPokemon, storedPokemons }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
