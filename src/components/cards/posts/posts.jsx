import {
  StyledData,
  StyledText,
  StyledUser,
  WrapperPosts,
} from "./posts.styles";
import moment from "moment"

export default function Posts({ user, text, date}) {
  return (
    <WrapperPosts>
      <StyledUser>@{user}</StyledUser>
      <StyledData>{moment(date).format("LLL")}</StyledData>
      <StyledText>{text}</StyledText>
    </WrapperPosts>
  );
}
