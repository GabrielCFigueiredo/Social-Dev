import styled from "styled-components";

const Textarea = styled.textarea`
  resize: none;
  background-color: ${(props) => props.theme.inputBorder};
  padding: 15px 20px;
  border-radius: 5px;
  border: 0.1px solid transparent;
  width: 100%;
  :focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
    box-shadow: 0 0 1px ${(props) => props.theme.primary};
  }
`;
export default Textarea
