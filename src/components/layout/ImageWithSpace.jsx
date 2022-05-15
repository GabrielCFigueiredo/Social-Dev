import { Wrapper, WrapperCard, WrapperImage } from "./ImageWithSpace.styles";


export default function ImageWithSpace({ children }) {
   
    return (
        <Wrapper>
            <WrapperImage/>
            <WrapperCard>
            {children}
            </WrapperCard>
            
        </Wrapper>
    )
}