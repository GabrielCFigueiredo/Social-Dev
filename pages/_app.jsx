import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globalStyles/globalStyles";
import moment from "moment";
import "moment/locale/pt-br";
import theme from "../src/theme";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    moment.locale("pt-br");
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
