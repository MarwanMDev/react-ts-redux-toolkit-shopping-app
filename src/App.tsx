import { useAppSelector } from './hooks';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './theme';
import ButtonAppBar from './components/ButtonAppBar';
import FixedBottomNavigation from './components/FixedBottomNavigation';

function App() {
  const theme = useAppSelector((state) => state.theme.darkTheme);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <CssBaseline />
      <ButtonAppBar />
      <FixedBottomNavigation />
    </ThemeProvider>
  );
}

export default App;
