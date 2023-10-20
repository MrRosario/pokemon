import React, { useState } from "react";
import Sidebar from "components/Sidebar";
import { CharacterFront, CharacterWrapper, MapWrapper, Tooltip, TooltipWrapper } from "./styled";
import CharacterFronIcon from "assets/images/ashFront.png";
import SearchTooltipIcon from "assets/images/searchTooltip.png";
import SearchingTooltipIcon from "assets/images/searchingTooltip.png";
import TooltipErrorIcon from "assets/images/tooltipError.png";

import useFetch from "hooks/useFetch";

const MapPage = () => {

  const [isMouseOvering, setIsMouseOvering] = useState(false);

  const { fetch, data: pokemons, isLoading, error } = useFetch()

  const handleMouseOver = () => {
    setIsMouseOvering(!isMouseOvering);
  }

  const handleClickCharacter = () => {
    fetch('https://api.quotable.io/randomhg')
  }
  
  return (
    <MapWrapper className="map">
      <Sidebar />
      <CharacterWrapper>
        <TooltipWrapper>
          {
              isMouseOvering && !error && !isLoading && (
                <Tooltip  src={SearchTooltipIcon} />
              )
            }

            {
              isMouseOvering && !error && isLoading && (
                <Tooltip  src={SearchingTooltipIcon} />
              )
            }
            {
              isMouseOvering && !isLoading && error && (
                <Tooltip  src={TooltipErrorIcon} />
              )
            }
        </TooltipWrapper>

        <CharacterFront 
          onMouseOver={handleMouseOver} 
          onMouseLeave={handleMouseOver}
          onClick={handleClickCharacter}
          src={CharacterFronIcon} 
          alt="character frontal" 
        />
      </CharacterWrapper>
    </MapWrapper>
  );
}

export default MapPage;
