import NavBar from "../src/components/navBar/navBar";
import styled from "styled-components";
import Container from "../src/components/container/container";
import CreatePosts from "../src/components/cards/createPosts/createPosts";
import { withIronSessionSsr } from "iron-session/next";
import {
  ContainerLoadPosts,
  LatestPosts,
  LoadPosts,
} from "../src/components/typography/Typography.styles";
import Posts from "../src/components/cards/posts/posts";
import { ironConfig } from "../lib/middleWares/ironSession";

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px 0;
  gap: 16px;
`;

export default function Home({ user }) {
  return (
    <>
      <NavBar />
      <Content>
        <Container>
          <CreatePosts
          userName={user.user}
          />
          <LatestPosts>Ultimas Postagens:</LatestPosts>
          <ContainerLoadPosts>
            <LoadPosts>Carregar novos posts</LoadPosts>
          </ContainerLoadPosts>
          <Posts />
          <Posts />
          <Posts />
        </Container>
      </Content>
    </>
  );
}
export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;
    if (!user) {
      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
      };
    }
    return {
      props: {
        user,
      },
    };
  },
  ironConfig
);
