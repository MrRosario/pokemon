import React, { useContext, useEffect, useState } from "react";
import { findHpStats, randomNumberGenerator } from "utils";
import Modal from "components/Modal";
import Sidebar from "components/Sidebar";
import useFetch from "hooks/useFetch";
import * as S from "./styled";
import CharacterFronIcon from "assets/images/ashFront.png";
import SearchTooltipIcon from "assets/images/searchTooltip.png";
import SearchingTooltipIcon from "assets/images/searchingTooltip.png";
import TooltipErrorIcon from "assets/images/tooltipError.png";
// import { translateText } from "services/Translate";
import PokemonContext from "context/pokemonContext";

const POKEMON_START = 1;
const POKEMON_LIMIT = 807;

const MapPage = () => {
  const [isMouseOvering, setIsMouseOvering] = useState(false);
  const { fetch, data: DataFetched, isLoading, error } = useFetch();
  const { setNewPokemon, storedPokemons } = useContext(PokemonContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [currentTypes, setCurrentTypes] = useState([]);

  const handleMouseOver = () => {
    setIsMouseOvering(!isMouseOvering);
  };

  const handleClickCharacter = () => {
    const pokemonId = randomNumberGenerator(POKEMON_START, POKEMON_LIMIT);

    setIsModalOpen(true);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  };

  // const textTranslation = (text) => {
  //   return translateText(text)
  //     .then((result) => {
  //       return result;
  //       // setCurrentTypes((old) => [...old, result]);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       return null;
  //     });
  // };

  useEffect(() => {
    if (!DataFetched) return;

    const { name, height, weight, sprites, stats, id, abilities } =
      DataFetched.data;

    const obj = {
      id,
      name,
      height,
      weight,
      avatar: sprites?.front_default,
      hp: findHpStats(stats),
      abilities: abilities.map((item) => item.ability.name),
      statistics: stats.filter((stat) => stat.stat.name !== "hp"),
      // types: currentTypes,
    };

    setNewPokemon(obj);

    setIsModalOpen(true);
  }, [DataFetched]);

  const handleOpenPokemon = (pokemon) => {
    setNewPokemon(pokemon);
    setIsModalOpen(true);
  };

  return (
    <>
      <S.MapWrapper className="map">
        <Sidebar handleOpenPokemon={handleOpenPokemon} />

        <S.CharacterWrapper>
          <S.TooltipWrapper>
            {isMouseOvering && !error && !isLoading && (
              <S.Tooltip src={SearchTooltipIcon} />
            )}

            {isMouseOvering && !error && isLoading && (
              <S.Tooltip src={SearchingTooltipIcon} />
            )}
            {isMouseOvering && !isLoading && error && (
              <S.Tooltip src={TooltipErrorIcon} />
            )}
          </S.TooltipWrapper>

          <S.CharacterFront
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseOver}
            onClick={handleClickCharacter}
            src={CharacterFronIcon}
            alt="character frontal"
          />
        </S.CharacterWrapper>
      </S.MapWrapper>

      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default MapPage;
