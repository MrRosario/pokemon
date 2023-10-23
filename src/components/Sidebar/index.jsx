import React, { useContext } from "react";
import Button from "components/Button";
import iconPlus from "assets/images/plus.png";
import * as S from "./styled";
import PokemonContext from "context/pokemonContext";

const Sidebar = ({ handleOpenPokemon }) => {
  const { storedPokemons } = useContext(PokemonContext);

  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        {storedPokemons.map((pokemon, index) => (
          <S.SideBarItem key={index} onClick={() => handleOpenPokemon(pokemon)}>
            <S.SidebarAvatar src={pokemon.avatar} alt="avatar" />
          </S.SideBarItem>
        ))}
      </S.SideBarList>
      <Button icon={iconPlus} />
    </S.SideBarWrapper>
  );
};

export default Sidebar;
