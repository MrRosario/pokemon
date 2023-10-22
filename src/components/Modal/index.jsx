import React, { useRef } from "react";
import CloseIcon from "assets/images/close.png";
import AvatarIcon from "assets/images/pokeball.png";
import * as S from "./styled";

const Modal = ({ setIsModalOpen, isOpen }) => {
  const modalRef = useRef(null);

  const onClose = () => {
    setIsModalOpen(false);
  };

  console.log("isOpen: ", isOpen);

  return (
    <S.Overlay ref={modalRef} onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.CloseWrapper onClick={onClose}>
          <S.Close src={CloseIcon} alt="close icon" />
        </S.CloseWrapper>

        <S.AvatarWrapper>
          <S.Avatar src={AvatarIcon} alt="avatar" />
        </S.AvatarWrapper>

        <S.ModalContent>
          <S.InnerContent>
            <S.AvatarName>BULBASAUR</S.AvatarName>
          </S.InnerContent>
          <S.InnerContent>
            <S.AvatarName>BULBASAUR</S.AvatarName>
          </S.InnerContent>
          <S.InnerContent>
            <S.AvatarName>BULBASAUR</S.AvatarName>
          </S.InnerContent>
          <S.InnerContent>
            <S.AvatarName>BULBASAUR</S.AvatarName>
          </S.InnerContent>
        </S.ModalContent>
      </S.Modal>
    </S.Overlay>
  );
};

export default Modal;
