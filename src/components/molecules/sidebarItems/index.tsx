import React from 'react';
import { MenuItem } from '../../atoms';
import { NAVIGATION_MENU_ITEMS } from '../../constants';

const SidebarItems = () => {
  const [isActive, setIsActive] = React.useState<string>('Home');

  const handleActiveLink = (label: string) => setIsActive(label);
  return (
    <div className="flex flex-col items-start gap-y-10 px-10">
      {NAVIGATION_MENU_ITEMS.map((menuItem, key) => (
        <MenuItem
          {...menuItem}
          key={key}
          active={isActive}
          onClick={() => handleActiveLink(menuItem.label)}
        />
      ))}
    </div>
  );
};

export default SidebarItems;
