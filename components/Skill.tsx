import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207'
        alt=''
        className='rounded-full border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32'
      />
    </div>
  );
}

export default Skill;
