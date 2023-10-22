import styled, { keyframes } from "styled-components";

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

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export const AvatarWrapper = styled.section`
  width: 247px;
  height: 247px;
  background-color: #f8f9fc;
  border-radius: 50%;
  border: 4px solid #00d608;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #8f9bb3;
  position: sticky;
  margin-left: auto;
  right: 10px;
  top: 12px;
  cursor: pointer;
`;

export const InnerContent = styled.section`
  margin-top: 45%;
`;

export const AvatarName = styled.h2`
  font-weight: 700;
  font-size: 18px;
  text-align: center;
`;

export const Close = styled.img``;
