import { GlobalStyles } from "../globalStyles/globalStyles"


function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyles/>
    <Component {...pageProps} />
    </>
  )
   
}

export default MyApp
