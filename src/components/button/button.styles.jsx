import styled from "styled-components";

export const Button = styled.button `
    
background-color: ${props => props.theme.primary};
padding: 15px 20px;
border-radius: 5px;
border: none;
font-weight: bold;
color: ${props => props.theme.white};
font-size: 16px;
cursor: pointer;
transition: 0.5s;

:hover {
    background-color: ${props => props.theme.primaryHover};
}

`