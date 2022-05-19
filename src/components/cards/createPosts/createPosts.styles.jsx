import styled from "styled-components";

export const WrapperCreatePost = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 20px 40px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  

  @media (max-width: 550px) {
    padding: 20px;
  }
`;
export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
`;
export const TextContainer = styled.div`
  width: 100%;
`;
export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;

  @media (max-width: 550px) {
    flex-direction:column-reverse
  }
`;
export const ButtonText = styled.p`
  flex: 1;
`;
