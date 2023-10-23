import React, { useContext, useState } from "react";
import CheckIconIcon from "assets/images/checkIcon.png";
import CloseIcon from "assets/images/close.png";
import * as S from "./styled";
import PokemonContext from "context/pokemonContext";

const InputEditor = ({ toggleInput, pokemonId }) => {
  const [inputName, setInputName] = useState("");
  const { setStoredPokemon, storedPokemons } = useContext(PokemonContext);

  const handleEditName = () => {
    if (!inputName) {
      alert("Edite o nome do Pokemon");
      return;
    }

    const oldArr = storedPokemons.filter((pokemon) => pokemon.id === pokemonId);
    const targetPokemon = storedPokemons.filter(
      (pokemon) => pokemon.id !== pokemonId
    );

    targetPokemon[0].name = inputName;

    setStoredPokemon([...oldArr, ...targetPokemon]);
    toggleInput();
  };

  return (
    <S.InputWrapper>
      <S.Input
        type="text"
        placeholder="Edite o nome"
        value={inputName}
        onChange={(event) => setInputName(event.target.value)}
      />
      <S.InpuButton onClick={handleEditName}>
        <S.InpuButtonIcon src={CheckIconIcon} alt="icon done" />
      </S.InpuButton>
      <S.InpuButton onClick={toggleInput}>
        <S.InpuButtonIcon src={CloseIcon} alt="icon close" />
      </S.InpuButton>
    </S.InputWrapper>
  );
};

export default InputEditor;
