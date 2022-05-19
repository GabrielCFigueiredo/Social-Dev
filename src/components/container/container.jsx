import { CardContainer } from "./container.styles";

export default function Container({ children }) {
    return (
        <CardContainer>
            {children}
        </CardContainer>
    )
}