import React from 'react';
import { Navbar } from '../components/organisms';

type MainLayoutProps = { children: React.ReactNode | JSX.Element };

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col gap-y-10">{children}</div>
    </div>
  );
};

export default MainLayout;
