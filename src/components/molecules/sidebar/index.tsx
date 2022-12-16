import React from 'react';
import { useAppContext } from '../../../context/useContext';
import { Drawer } from '../../atoms';
import SidebarItems from '../sidebarItems';

const Sidebar = () => {
  const { openSidebar, setOpenSidebar } = useAppContext();
  const handleOpenSidebar = () => {
    setOpenSidebar((prev: boolean) => !prev);
  };
  return (
    <Drawer
      anchor="left"
      open={openSidebar}
      className=""
      title="SideBar"
      onClose={handleOpenSidebar}
    >
      <div className="h-full px-5 py-10 w-96">
        <SidebarItems />
      </div>
    </Drawer>
  );
};

export default Sidebar;
