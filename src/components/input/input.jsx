import {
  ErrorLabel,
  ErrorMessage,
  InputContainer,
  StyledInput,
  StyledLabel,
} from "./input.styles";
import { forwardRef } from "react";
const Input = forwardRef(function Input({ Label, error, ...props }, ref) {
  return (
    <InputContainer>
      <StyledLabel>{Label}</StyledLabel>

      <StyledInput placeholder={Label} error={error} {...props} ref={ref} />
      {error && (
        <ErrorLabel>{ErrorMessage[error.type] || error.message}</ErrorLabel>
      )}
    </InputContainer>
  );
});
export default Input;
