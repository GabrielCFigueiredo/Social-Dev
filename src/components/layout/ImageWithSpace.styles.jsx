import styled from "styled-components";

export const WITH_BREAK = "500px"

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
    
    background-color: ${props => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    padding: 30px;
    
    @media (min-width: ${WITH_BREAK}) {
        
        width: calc(${WITH_BREAK} - 60px) 
    }

    @media (max-width: ${WITH_BREAK}) {
       
        width: 100%;
    }

`

export const FormContainer = styled.div `
    
    margin-top: 60px;
`

export const Form = styled.form `
    
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`
export const Register = styled.p `
    
    
`