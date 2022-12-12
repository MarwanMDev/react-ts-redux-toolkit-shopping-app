import React from 'react';
import { MenuItem } from '../../atoms';
import { NAVIGATION_MENU_ITEMS } from '../../constants';

const MenuItems = () => {
  const [isActive, setIsActive] = React.useState<string>('Home');

  const handleActiveLink = (label: string) => setIsActive(label);

  return (
    <div className="flex-1 flex flex-row justify-end gap-x-10 px-16">
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

export default MenuItems;
