import styled from "styled-components";

export const InputWrapper = styled.section`
  display: flex;
  justify-content: center;
  column-gap: 8px;
`;

export const Input = styled.input`
  border-radius: 4px;
  padding: 5px;
  border: 2px solid #8f9bb3;
  flex: 4;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.5);
  font-size: 15px;
  font-weight: 600;
  &::placeholder {
    font-weight: 500;
  }
`;

export const InpuButton = styled.button`
  background-color: #edf1f7;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  border: unset;
  flex: 1;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export const InpuButtonIcon = styled.img`
  width: 16px;
  height: 12px;
  object-fit: scale-down;
`;
