import { StyledInput, StyledLabel } from "./input.styles";

export default function Input({ Label, ...props }) {

    return (
        <>
            <StyledLabel>{Label}</StyledLabel>
            <StyledInput placeholder={Label} {...props} />
        </>
    )
}