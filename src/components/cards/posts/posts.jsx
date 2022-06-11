import {
  ContainerNavigation,
  StyledData,
  StyledText,
  StyledUser,
  WrapperPosts,
} from "./posts.styles";
import moment from "moment";
import Navigation from "../../navigation/navigation";

export default function Posts({ user, text, date }) {
  const handleEdit = () => {
    console.log("editar post");
  };
  const handleDelete = () => {
    console.log("delete post");
  };
  return (
    <WrapperPosts>
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

      <StyledData>{moment(date).format("LLL")}</StyledData>
      <StyledText>{text}</StyledText>
    </WrapperPosts>
  );
}
