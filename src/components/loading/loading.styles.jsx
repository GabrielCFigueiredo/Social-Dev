import styled from "styled-components";

export const LoadingWrapper = styled.div`
  .lds-dual-ring {
    display: inline-block;
    width: 40px;
    height: 15px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 24px;
    height: 24px;
    margin-top: -10px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
