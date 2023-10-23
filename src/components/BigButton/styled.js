import styled from "styled-components";

export const BigButton = styled.button`
  position: sticky;
  bottom: 0;
  padding: 15px 20px;
  background-color: #ff3d71;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  border-radius: 42px;
  border: none;
  width: fit-content;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.05);
  }
`;
