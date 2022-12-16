import React from 'react';
import { Sidebar } from '../components/molecules';
import { Navbar } from '../components/organisms';
import { useWindowSize } from '../hooks/useWindowSize';

type MainLayoutProps = { children: React.ReactNode | JSX.Element };

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isMobile } = useWindowSize();

  return (
    <div className="min-h-screen flex flex-col">
      {isMobile ? <Sidebar /> : <Navbar />}
      <div className="flex flex-col gap-y-10">{children}</div>
    </div>
  );
};

export default MainLayout;
