import Loading from "../loading/loading";
import { ButtonWrapper } from "./button.styles";

export default function Button({ children, disabled, loading, ...props }) {
  return (
    <ButtonWrapper disabled={disabled || loading} {...props}>
      {loading && <Loading />}
      {!loading && children}
    </ButtonWrapper>
  );
}
