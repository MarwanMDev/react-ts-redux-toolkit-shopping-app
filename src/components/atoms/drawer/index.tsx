import { Close } from '@mui/icons-material';
import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
} from '@mui/material';
import React from 'react';

type DrawerProps = {
  title?: string;
  children: React.ReactNode | JSX.Element;
  onClose?(): void;
} & MuiDrawerProps;

const Drawer = ({
  title,
  children,
  onClose,
  ...rest
}: DrawerProps) => {
  return (
    <MuiDrawer {...rest}>
      <div className="flex flex-row justify-between text-2xl font-bold p-10 items-center">
        {title}
        <Close onClick={onClose} className="cursor-pointer" />
      </div>
      {children}
    </MuiDrawer>
  );
};

export default Drawer;
