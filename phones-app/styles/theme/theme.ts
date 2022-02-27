import {createTheme} from "@mui/material/styles";
import variables from './variables.module.scss'

export const theme = createTheme({
  palette: {
    primary: {
      main: variables.primaryMain,
      light: variables.primaryLight,
      dark: variables.primaryDark,
    },
    secondary: {
      main: variables.secondaryMain,
    },
  },
  typography: {
    fontFamily: 'Inter'
  }
});
