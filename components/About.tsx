import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: false,
        }}
        src='https://avatars.githubusercontent.com/u/72456128?v=4'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
      />

      <div className='space-y-10 px-0 md:px-10 justify-center items-center'>
        <h4 className='text-4xl font-semibold'>Here is a little background</h4>
        <p className='text-md '>
          Hi Everyone, my name is Peter Sekesan and I am from New York. I am a
          software engineer currently working as a Full Stack Developer for
          Newsday Media Group. In May of 2020, my career in Events Marketing and
          Management came to an end due to some mass layoffs at my company. I
          took the time (and severance which was certainly helpful) to re-focus
          a bit and decided to finally pursue my intrigue for programming into a
          career. I enrolled and later graduated from a 6-month long intensive
          Software Engineering boot camp. Since then I have worked as a Frontend
          Developer at Adelphi University, as well as numerous small side
          projects. Apart from coding, some other activities that I love to
          partake in is traveling, exercising, playing guitar and pretty much
          anything Disney.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
