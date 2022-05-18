import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../globalStyles/globalStyles"
import theme from "../src/theme"


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
    <Component {...pageProps}/>
    </ThemeProvider>
  )
   
}

export default MyApp
