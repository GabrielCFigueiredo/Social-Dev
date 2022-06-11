import NavBar from "../src/components/navBar/navBar";
import styled from "styled-components";
import Container from "../src/components/container/container";
import CreatePosts from "../src/components/cards/createPosts/createPosts";
import { withIronSessionSsr } from "iron-session/next";
import { LatestPosts } from "../src/components/typography/Typography.styles";
import Posts from "../src/components/cards/posts/posts";
import { ironConfig } from "../lib/middleWares/ironSession";

import axios from "axios";
import useSWR from "swr";

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px 0;
  gap: 16px;
`;

const fetcher = (url) => axios.get(url).then((res) => res.data.posts);

export default function Home({ user }) {
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/post`,
    fetcher
  );
  return (
    <>
      <NavBar />
      <Content>
        <Container>
          <CreatePosts userName={user.user} />
          <LatestPosts>Ultimas Postagens:</LatestPosts>

          {data?.map((post) => {
            return (
              <Posts
                key={post._id}
                user={post.createdBy.user}
                date={post.createdDate}
                text={post.text}
              />
            );
          })}
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
