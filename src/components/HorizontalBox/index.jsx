import React from "react";
import * as S from "./styled";

const HorizontalBox = ({ title, children }) => (
  <S.HBoxWrapper>
    <S.HBoxTitleWrapper>
      <S.HBoxTitle>{title}</S.HBoxTitle>
    </S.HBoxTitleWrapper>

    <S.HBoxContent>{children}</S.HBoxContent>
  </S.HBoxWrapper>
);

export default HorizontalBox;
