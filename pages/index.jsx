import NavBar from "../src/components/navBar/navBar";
import styled from "styled-components";
import Container from "../src/components/container/container";
import CreatePosts from "../src/components/cards/createPosts/createPosts";

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px 0;
`;


export default function Home() {
  return (
    <>
      <NavBar />
      <Content>
        <Container>
          <CreatePosts />
        </Container>
      </Content>
    </>
  );
}
