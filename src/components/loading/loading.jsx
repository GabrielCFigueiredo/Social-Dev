import { LoadingWrapper } from "./loading.styles";

export default function Loading() {
  return (
    <LoadingWrapper>
      <div className="lds-dual-ring"></div>
    </LoadingWrapper>
  );
}
