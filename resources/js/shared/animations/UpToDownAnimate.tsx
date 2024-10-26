import React from 'react';
import {motion} from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const UpToDownAnimate: React.FC<Props> = ({children, className}) => {
  return (
    <motion.div
      className={className}
      initial={{y: 0, scale: 1}}
      animate={{y: [-10, 0, -10], scale: [1, 0.9, 1]}}
      transition={{
        duration: 4,
        ease: [0.42, 0, 0.58, 1],
        repeat: Infinity
      }}
    >
      {children}
    </motion.div>
  );
};

export default UpToDownAnimate;
