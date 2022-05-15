import styled from "styled-components";

export const WITH_BREAK = "600px"

export const Wrapper = styled.div `
    
display: flex;

`
export const WrapperImage = styled.div `
    
    background-image: url("/coffee-background.jpg");
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;

    width: 100%;
    height: 100vh;

    @media (max-width:${WITH_BREAK}) {
        display: none;
    }

`
export const WrapperCard = styled.div `
    
    background-color: white;
    
    
    @media (min-width: ${WITH_BREAK}) {
        
        min-width: ${WITH_BREAK}
    }

    @media (max-width: ${WITH_BREAK}) {
       
        width: 100%;
    }

`