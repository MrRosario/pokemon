import React, { useEffect, useState } from "react";
import { findHpStats, randomNumberGenerator } from "utils";
import Modal from "components/Modal";
import Sidebar from "components/Sidebar";
import useFetch from "hooks/useFetch";
import * as S from "./styled";
import CharacterFronIcon from "assets/images/ashFront.png";
import SearchTooltipIcon from "assets/images/searchTooltip.png";
import SearchingTooltipIcon from "assets/images/searchingTooltip.png";
import TooltipErrorIcon from "assets/images/tooltipError.png";

const POKEMON_START = 1;
const POKEMON_LIMIT = 807;

const MapPage = () => {
  const [isMouseOvering, setIsMouseOvering] = useState(false);
  const { fetch, data: pokemon, isLoading, error } = useFetch();
  const [pokemonData, setPokemonData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOvering(!isMouseOvering);
  };

  const handleClickCharacter = () => {
    const pokemonId = randomNumberGenerator(POKEMON_START, POKEMON_LIMIT);

    setIsModalOpen(true);

    // fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  };

  useEffect(() => {
    if (!pokemon) return;

    const { name, height, weight, sprites, stats, id } = pokemon.data;

    setPokemonData({
      id,
      name,
      height,
      weight,
      avatar: sprites?.front_default,
      hp: findHpStats(stats),
    });

    setIsModalOpen(true);
  }, [pokemon]);

  console.log("pokemon: ", pokemon);
  console.log("pokemonData: ", pokemonData);

  return (
    <>
      <S.MapWrapper className="map">
        <Sidebar />

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

      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} isOpen={isModalOpen} />
      )}
    </>
  );
};

export default MapPage;
