import styled from "styled-components";

export const WrapperPosts = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 20px;
  display: flex;
  gap: 6px;
  flex-direction: column;
  border-radius: 5px;

  @media (max-width: 550px) {
    padding: 20px;
  }
`;

export const StyledUser = styled.span`
  font-weight: bold;
`;

export const StyledData = styled.span`
  font-weight: bold;
  font-size: 12px;
`;
export const StyledText = styled.span`
  font-size: 18px;
`;
export const ContainerNavigation = styled.div`
  display: flex;
  justify-content: space-between;
`;
