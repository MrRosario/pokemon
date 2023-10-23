import styled from "styled-components";

const borderStyle = "1px solid #c5cee0";

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
    border-right: ${borderStyle};
    border-left: ${borderStyle};
  }
`;

export const VBoxTitle = styled.h2`
  font-size: 12px;
  font-weight: 700;
  color: #000;
`;

export const VBoxValue = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #000;
`;
