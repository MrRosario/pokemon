import styled, { keyframes, css } from "styled-components";

const slideUp = keyframes`
0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const centerElementStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const headingStyle = css`
  font-weight: 700;
  font-size: 18px;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 1;
  ${centerElementStyle}
`;

export const Modal = styled.section`
  animation-name: ${slideUp};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  position: relative;
  background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
  height: 560px;
  width: 360px;
  border-radius: 8px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalContent = styled.section`
  background-color: #f8f9fc;
  width: 100%;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 40% 16px 20px;
  position: relative;
  top: 20%;
`;

export const AvatarWrapper = styled.section`
  width: 247px;
  height: 247px;
  background-color: #f8f9fc;
  border-radius: 50%;
  border: 4px solid #00d608;
  z-index: 1;
  ${centerElementStyle};
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 20px;
`;

export const Avatar = styled.img``;

export const CloseWrapper = styled.div`
  background-color: #fff;
  height: 38px;
  width: 38px;
  border-radius: 50%;
  border: 2px solid #8f9bb3;
  position: sticky;
  margin-left: auto;
  right: 10px;
  top: 12px;
  cursor: pointer;
  z-index: 2;
  ${centerElementStyle}
`;

export const AvatarName = styled.h2`
  ${headingStyle};
  text-align: center;
`;

export const Close = styled.img``;

export const PokemonInfo = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const VBox = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  text-align: center;
  padding: 0 30px;
`;

export const VerticalBoxesWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  ${VBox}:nth-child(2) {
    border-right: 1px solid #c5cee0;
    border-left: 1px solid #c5cee0;
  }
`;

export const VBoxTitle = styled.h2`
  font-size: 12px;
  font-weight: 700;
  color: #000;
`;

export const VBoxValue = styled.h3`
  ${headingStyle};
  color: #000;
`;

export const HBoxWrapper = styled.section``;

export const HBoxContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 10px;
`;

export const HBoxTitleWrapper = styled.h2`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #c5cee0;
  line-height: 0.1em;
  margin: 10px 0 20px;
  font-size: 15px;
  font-weight: 600;
  color: #2e3a59;
`;

export const HBoxTitle = styled.span`
  background: #f8f9fc;
  padding: 0 10px;
`;

export const TypeWrapper = styled.section`
  background-color: #67af32;
  padding: 8px 20px;
  border-radius: 42px;
`;

export const TypeTitle = styled.h2`
  font-size: 12px;
  font-weight: 700;
  color: #fff;
`;

export const Skills = styled.h2`
  font-size: 12px;
  font-weight: 700;
  color: #000;
`;

export const StatsWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StatInnerWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  column-gap: 10px;
`;

export const InnerHBWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 12px;
`;

export const StatTitle = styled.h2`
  font-size: 12px;
  font-weight: 700;
  color: #2e3a59;
`;

export const StatValue = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: #2e3a59;
`;

export const Icon = styled.img``;

export const PokebolWrapper = styled.section`
  text-align: center;
  position: sticky;
  bottom: 0;
`;

export const Pokebol = styled.img`
  width: 120px;
  height: 120px;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const AvatarNameWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: baseline;
  column-gap: 20px;
`;

export const EditIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: 100%;
`;

export const InnerFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: 100%;
`;
