import {
  StyledData,
  StyledText,
  StyledUser,
  WrapperPosts,
} from "./posts.styles";

export default function Posts() {
  return (
    <WrapperPosts>
      <StyledUser>@GabrielFigueiredo</StyledUser>
      <StyledData>20 de maio 2022</StyledData>
      <StyledText>hoje esta muito frio</StyledText>
    </WrapperPosts>
  );
}
