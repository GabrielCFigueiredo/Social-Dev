import styled from "styled-components";


export const InputContainer = styled.div``;

export const StyledLabel = styled.p``;

export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.inputBorder};
  padding: 15px 20px;
  cursor: pointer;
  border-radius: 5px;
  border: 0.1px solid transparent;
  width: 100%;

  :focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
    box-shadow: 0 0 1px ${(props) => props.theme.primary};
  }

  :hover {
    border-color: ${(props) => props.theme.primary};
  }
`;
