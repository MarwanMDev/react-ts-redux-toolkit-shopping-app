import React from 'react';

type contextProps = {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<(prev: boolean) => boolean>;
};

type childrenProps = {
  children: React.ReactNode | JSX.Element;
};

const initialValues = {
  openSidebar: false,
  setOpenSidebar: () => undefined,
};

const AppContext = React.createContext<contextProps>(initialValues);

export const AppContextProvider = ({ children }: childrenProps) => {
  const [openSidebar, setOpenSidebar] = React.useState<boolean>(
    initialValues.openSidebar
  );

  const values = {
    openSidebar,
    setOpenSidebar,
  };

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const { ...state } = React.useContext(AppContext);
  return { ...state };
};

export default AppContextProvider;
