import React from "react";
import * as S from "./styled";

const VerticalBox = ({ title, value }) => (
  <S.VBox>
    <S.VBoxTitle>{title}</S.VBoxTitle>
    <S.VBoxValue>{value}</S.VBoxValue>
  </S.VBox>
);

export default VerticalBox;
