import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#ECF0F1',
    },
    secondary: {
      main: '#34495E',
    },
  },
});

export default theme;
