import React from 'react';
import { motion } from 'framer-motion';
import ANIMATIONS from './animations.config';

type MotionProps = {
  children: React.ReactNode | JSX.Element;
  animation: string;
  className?: string;
};

const Motion = ({ children, animation, className }: MotionProps) => {
  return (
    <motion.div className={className} {...ANIMATIONS[animation]}>
      {children}
    </motion.div>
  );
};

export default Motion;
