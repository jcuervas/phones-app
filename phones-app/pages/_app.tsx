import 'styles/globals.css'
import 'styles/App.scss'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../styles/theme/theme";

function PhoneApp({pageProps, Component}: AppProps) {

  return (
   <ThemeProvider theme={theme}>
     <Component {...pageProps} />
   </ThemeProvider>
  )
}

export default PhoneApp
