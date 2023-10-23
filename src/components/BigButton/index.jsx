import React from "react";
import * as S from "./styled";

const BigButton = ({ onClik, label, isDisabled = false }) => {
  return (
    <S.BigButton disabled={isDisabled} onClick={onClik}>
      {label}
    </S.BigButton>
  );
};

export default BigButton;
