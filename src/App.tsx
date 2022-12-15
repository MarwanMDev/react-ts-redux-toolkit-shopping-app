import { useAppSelector } from './hooks';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './theme';
import ButtonAppBar from './components/ButtonAppBar';
import FixedBottomNavigation from './components/FixedBottomNavigation';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import {
  HeroSection,
  FeaturedProducts,
  ProductList,
} from './components/organisms';

function App() {
  const theme = useAppSelector((state) => state.theme.darkTheme);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <CssBaseline />
      <MainLayout>
        <HeroSection />
        <FeaturedProducts />
        <ProductList />
      </MainLayout>
      {/* <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes> */}
    </ThemeProvider>
  );
}

export default App;
