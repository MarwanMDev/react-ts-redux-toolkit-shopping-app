import React from 'react';

type NavigationButtonProps = {
  icon?: React.ReactNode;
  type: 'next' | 'prev';
  onClick?(): void;
};

const NavigationButton = ({
  icon,
  type,
  onClick,
}: NavigationButtonProps) => {
  const controlStyles = `absolute z-50 group-hover:opacity-75 opacity-0 hover:!opacity-100
  ${
    icon
      ? 'top-1/2 transform -translate-y-1/2'
      : 'h-full top-0 w-16 bg-gray-400 opacity-30 hover:bg-gray-600'
  }
  ${type === 'next' ? 'right-0' : 'left-0'}`;
  return (
    <button className={controlStyles} onClick={onClick}>
      {type === 'next' && (icon ? icon : <span>Next</span>)}
      {type === 'prev' && (icon ? icon : <span>Prev</span>)}
    </button>
  );
};

export default NavigationButton;
