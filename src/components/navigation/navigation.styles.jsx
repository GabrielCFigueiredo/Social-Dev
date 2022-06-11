import styled from "styled-components";

export const Dots = styled.img`
  cursor: pointer;
`;
export const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  width: 200px;
  position: absolute;
  right: 0%;
  box-shadow: 6px 5px 15px 5px rgba(0, 0, 0, 0.15);
  display: ${(props) => (props.show ? "block" : "none")};
`;
export const WrapperNavigation = styled.div`
  position: relative;
`;
export const ContainerOption = styled.div`
  padding: 10px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.inputBackground};
  }
`;
