import styled from "styled-components";

export const InputContainer = styled.div``;

export const StyledLabel = styled.p``;

export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.inputBackground};
  padding: 15px 20px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid
    ${(props) => (props.error ? `${props.theme.error}` : `transparent`)};
  width: 100%;

  :focus {
    outline: ${(props) => (props.error ? `${props.theme.error}` : `none`)};
    border-color: ${(props) =>
      props.error ? `${props.theme.error}` : `${props.theme.primary}`};
  }

  :hover {
    border-color: ${(props) =>
      props.error ? `${props.theme.error}` : `${props.theme.primary}`};
  }
`;

export const ErrorLabel = styled.p`
  color: ${(props) => props.theme.error};
  font-weight: 600;
  font-size: 12px;
`;
export const ErrorMessage = {
  "string.empty": "O campo é obrigatório",
  "string.email": "Digite um email valído",
  "string.min": "Sua senha deve ter no minimo 6 caracteres",
  "duplicated": "já existe uma conta com esse valor.",
  "password incorrect": "senha invalida.",
  "userOrEmail": "usuario ou email invalido."

};
