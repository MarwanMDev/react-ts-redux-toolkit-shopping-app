import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: ['Fauna One', 'sans-serif'].join(','),
    fontSize: 11,
    h1: {
      fontFamily: ['Cinzel', 'sans-serif'].join(','),
      fontSize: 48,
    },
    h2: {
      fontFamily: ['Cinzel', 'sans-serif'].join(','),
      fontSize: 36,
    },
    h3: {
      fontFamily: ['Cinzel', 'sans-serif'].join(','),
      fontSize: 20,
    },
    h4: {
      fontFamily: ['Cinzel', 'sans-serif'].join(','),
      fontSize: 14,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: ['Fauna One', 'sans-serif'].join(','),
    fontSize: 11,
    h1: {
      fontFamily: ['Cinzel', 'sans-serif'].join(','),
      fontSize: 48,
    },
    h2: {
      fontFamily: ['Cinzel', 'sans-serif'].join(','),
      fontSize: 36,
    },
    h3: {
      fontFamily: ['Cinzel', 'sans-serif'].join(','),
      fontSize: 20,
    },
    h4: {
      fontFamily: ['Cinzel', 'sans-serif'].join(','),
      fontSize: 14,
    },
  },
});
