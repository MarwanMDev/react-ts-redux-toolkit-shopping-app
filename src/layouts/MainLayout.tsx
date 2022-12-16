import React from 'react';
import { Navbar, MobileNavbar } from '../components/organisms';
import AppContextProvider from '../context/useContext';
import { useWindowSize } from '../hooks/useWindowSize';

type MainLayoutProps = { children: React.ReactNode | JSX.Element };

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isMobile } = useWindowSize();

  return (
    <AppContextProvider>
      <div className="min-h-screen flex flex-col">
        {isMobile ? <MobileNavbar /> : <Navbar />}
        <div className="flex flex-col gap-y-10">{children}</div>
      </div>
    </AppContextProvider>
  );
};

export default MainLayout;
