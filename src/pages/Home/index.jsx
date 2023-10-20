import React from "react";
import { useNavigate } from "react-router-dom";
import {HomeWrapper, PokemonLogo} from "./styled";
import img from "assets/images/pokemonLogo.png";
import Button from "components/Button";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <HomeWrapper>
      <PokemonLogo src={img} alt="pokimon logo" />
      <Button text="START" onClick={() => navigate("/map")} />
    </HomeWrapper>
  );
}



export default HomePage;
