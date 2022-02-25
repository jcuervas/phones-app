import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3f9ab5',
      light: '#a9def1',
      dark: '#0c4454',
    },
    secondary: {
      main: '#f56000',
    },
  },
  typography: {
    fontFamily: 'Inter'
  }
});
