import styled from "styled-components";

export const WrapperStyle = styled.div `
    background-color: ${props => props.theme.white};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
`
export const StyleLogo = styled.h2 `
    font-weight: bold;
    font-size: 16px;
`