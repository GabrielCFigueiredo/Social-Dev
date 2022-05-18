import styled from "styled-components";

export const InputContainer = styled.div``;

export const StyledLabel = styled.p``;

export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.inputBorder};
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    border: .5px solid ${(props) => props.theme.primary};
  }
`;
