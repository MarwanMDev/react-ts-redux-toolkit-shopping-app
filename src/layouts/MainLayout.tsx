import React from 'react';
import { Navbar } from '../components/organisms';

type MainLayoutProps = { children: React.ReactNode | JSX.Element };

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
