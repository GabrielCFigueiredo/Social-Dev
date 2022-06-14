import {
  ContainerNavigation,
  StyledData,
  StyledText,
  StyledUser,
  WrapperPosts,
} from "./posts.styles";
import moment from "moment";
import Navigation from "../../navigation/navigation";
import { useSWRConfig } from "swr";
import axios from "axios";

export default function Posts({ user, text, date, isOwner, id }) {
  const { mutate } = useSWRConfig();
  const handleEdit = () => {
    console.log("editar post");
  };
  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/post`,
        {
          data: {
            id,
          },
        }
      );
      if (res.status === 200) {
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <WrapperPosts>
      {isOwner && (
        <ContainerNavigation>
          <StyledUser>@{user}</StyledUser>

          <Navigation
            options={[
              {
                text: "Editar Post",
                onClick: handleEdit,
              },
              {
                text: "Deletar Post",
                onClick: handleDelete,
              },
            ]}
          />
        </ContainerNavigation>
      )}

      <StyledData>{moment(date).format("LLL")}</StyledData>
      <StyledText>{text}</StyledText>
    </WrapperPosts>
  );
}
