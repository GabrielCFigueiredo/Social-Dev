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
import { useEffect, useState } from "react";
import axios from "axios";

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px 0;
  gap: 16px;
`;

export default function Home({ user }) {
  const [data, setData] = useState([]);

  const handlePost = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/post`
      );
      setData(response.data.posts);
      console.log(response.data.posts);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    handlePost();
  }, []);
  console.log(data);
  return (
    <>
      <NavBar />
      <Content>
        <Container>
          <CreatePosts userName={user.user} />
          <LatestPosts>Ultimas Postagens:</LatestPosts>
          <ContainerLoadPosts>
            <LoadPosts>Carregar novos posts</LoadPosts>
          </ContainerLoadPosts>
          {data &&
            data?.map((post) => {
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
