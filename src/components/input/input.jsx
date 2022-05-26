import { InputContainer, StyledInput, StyledLabel } from "./input.styles";
import { forwardRef } from "react";

const Input = forwardRef( function Input({ Label, ...props }, ref){
  return (
    <InputContainer>
      <StyledLabel>{Label}</StyledLabel>
      <StyledInput placeholder={Label} {...props} ref={ref}/>
    </InputContainer>
  );
});
export default Input;
