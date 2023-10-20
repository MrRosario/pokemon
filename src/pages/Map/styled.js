import styled from "styled-components";
import pageBackgroundImg from "assets/images/pageBackground.png";

export const MapWrapper = styled.div`
  position: relative;
  background-image: url(${pageBackgroundImg});
  background-color: #5dae12;
  background-size: cover;
  height: 100vh;
`;

export const CharacterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const TooltipWrapper = styled.div`
  height: 67px;
`;

export const Tooltip = styled.img``;

export const CharacterFront = styled.img`
  cursor: pointer;
  position: relative;
  right: 5px;
`;
