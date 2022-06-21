import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 50px;
  font-weight: bold;
`;

export const H3 = styled.h3`
  font-size: 16px;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const H2 = styled.h2`
  font-size: 35px;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;
export const LatestPosts = styled(H3)`
  font-size: 24px;
  font-weight: bold;
  
  @media (max-width: 600px) {
    padding: 12px;
  }
`;
export const LoadPosts = styled.span`
  
  cursor: pointer;
`;

export const ContainerLoadPosts = styled.div`
  text-align: center;
`;

