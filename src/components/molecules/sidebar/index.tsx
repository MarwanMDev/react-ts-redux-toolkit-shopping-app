import React from 'react';
import { Drawer } from '../../atoms';
import SidebarItems from '../sidebarItems';

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  return (
    <Drawer anchor="left" open={true} className="" title="SideBar">
      <div className="h-full px-5 py-10 w-96">
        <SidebarItems />
      </div>
    </Drawer>
  );
};

export default Sidebar;
