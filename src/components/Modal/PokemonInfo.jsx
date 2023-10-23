import React, { useContext, useState } from "react";
import DefesaIcon from "assets/images/shield.png";
import VelocidadeIcon from "assets/images/speed.png";
import AtaqueIcon from "assets/images/sword.png";
import PokeballIcon from "assets/images/pokeball.png";
import EditIcon from "assets/images/editIcon.png";
import PokemonContext from "context/pokemonContext";
import { isCaptured, transformValue } from "utils";
import InputEditor from "components/InputEditor";
import BigButton from "components/BigButton";
import HorizontalBox from "components/HorizontalBox";
import * as S from "./styled";
import VerticalBox from "components/VerticalBox";

const PokemonInfo = ({ handleCapturePokemon, handleLiberarPokemon }) => {
  const [isNameInputOpen, setIsNameInputOpen] = useState(false);
  const { newPokemon, storedPokemons } = useContext(PokemonContext);
  const { name, height, weight, hp, abilities, statistics, id } = newPokemon;

  const isPokemonCaptured = isCaptured(storedPokemons, name);

  const toggleInput = () => {
    setIsNameInputOpen(!isNameInputOpen);
  };

  return (
    <S.PokemonInfo>
      {!isNameInputOpen ? (
        <S.AvatarNameWrapper>
          <S.AvatarName>{name}</S.AvatarName>
          {isPokemonCaptured && (
            <S.EditIcon
              src={EditIcon}
              alt="edition icon"
              onClick={toggleInput}
            />
          )}
        </S.AvatarNameWrapper>
      ) : (
        <InputEditor toggleInput={toggleInput} pokemonId={id} />
      )}

      <S.VerticalBoxesWrapper>
        <VerticalBox title="HP" value={`${hp.base_stat}/${hp.base_stat}`} />
        <VerticalBox title="ALTURA" value={`0,${height}m`} />
        <VerticalBox title="PESO" value={`${transformValue(weight)}kg`} />
      </S.VerticalBoxesWrapper>

      <HorizontalBox title="TIPO">
        <S.TypeWrapper>
          <S.TypeTitle>Plant</S.TypeTitle>
        </S.TypeWrapper>
        <S.TypeWrapper>
          <S.TypeTitle>Water</S.TypeTitle>
        </S.TypeWrapper>
      </HorizontalBox>

      <HorizontalBox title="HABILIDADES">
        {abilities.map((ability, index) => (
          <S.Skills key={index}>
            {ability}
            {index === 0 ? ", " : ""}
          </S.Skills>
        ))}
      </HorizontalBox>

      {isPokemonCaptured && (
        <HorizontalBox title="ESTATÍSTICAS">
          <S.InnerHBWrapper>
            {statistics.map((stat, index) => {
              const statTitle = {
                attack: "ATAQUE",
                defense: "DEFESA",
                "special-attack": "ATAQUE ESPECIAL",
                "special-defense": "DEFESA ESPECIAL",
                speed: "VELOCIDADE",
              };
              return (
                <Stat
                  key={index}
                  type={stat.stat.name}
                  title={statTitle[stat.stat.name]}
                  value={stat.base_stat}
                />
              );
            })}
          </S.InnerHBWrapper>
        </HorizontalBox>
      )}

      {!isPokemonCaptured ? (
        <S.PokebolWrapper>
          <S.Pokebol
            src={PokeballIcon}
            alt="pokebol"
            onClick={handleCapturePokemon}
          />
        </S.PokebolWrapper>
      ) : (
        <BigButton onClik={handleLiberarPokemon} label="LIBERAR POKEMON" />
      )}
    </S.PokemonInfo>
  );
};

const Stat = ({ title, value, type }) => (
  <S.StatsWrapper>
    <S.StatInnerWrapper>
      {type.includes("defense") && <S.Icon src={DefesaIcon} alt="Icon" />}
      {type.includes("attack") && <S.Icon src={AtaqueIcon} alt="Icon" />}
      {type.includes("speed") && <S.Icon src={VelocidadeIcon} alt="Icon" />}
      <S.StatTitle>{title}</S.StatTitle>
    </S.StatInnerWrapper>
    <S.StatValue>{value}</S.StatValue>
  </S.StatsWrapper>
);

export default PokemonInfo;
