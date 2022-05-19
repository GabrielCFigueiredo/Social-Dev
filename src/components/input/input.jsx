import { InputContainer, StyledInput, StyledLabel } from "./input.styles";

export default function Input({ Label, ...props }) {

    return (
        <InputContainer>
            <StyledLabel>{Label}</StyledLabel>
            <StyledInput placeholder={Label} {...props} />
        </InputContainer>
    )
}