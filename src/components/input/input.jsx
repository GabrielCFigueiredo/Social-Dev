import {
  ErrorLabel,
  ErrorMessage,
  InputContainer,
  StyledInput,
  StyledLabel,
} from "./input.styles";
import { useController } from "react-hook-form";

const Input = (function Input({ Label, name,control, defaultValue = "", ...props }, ref) {
  const {
field: { value, onChange },
fieldState: { error }
  } = useController({ name, control, defaultValue })
  return (
    <InputContainer>
      <StyledLabel>{Label}</StyledLabel>

      <StyledInput placeholder={Label} error={error} {...props} value={value} onChange={onChange} />
      {error && (
        <ErrorLabel>{ErrorMessage[error.type] || error.message}</ErrorLabel>
      )}
    </InputContainer>
  );
});
export default Input;
