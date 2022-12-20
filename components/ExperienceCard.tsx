import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w=[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/43135831_10156613784919449_5791367097728630784_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-iCOVWpVi7AAX9nbbSe&_nc_ht=scontent-lga3-2.xx&oh=00_AfDr8Llqln84JYXycHkpsQkzOQyYpJ9J-KBRNaV9VaGdaw&oe=63C9828A'
        alt=''
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'> Job Title</h4>
        <p className='font-bold text-2xl mt-1'> Company</p>
        <div className='flex space-x-2 my-2'>
          {/* <div> tech used */}
          <img
            className='h-10 w-10 rounded-full'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
            alt=''
          />
          {/* <div> tech used */}
          {/* <div> tech used */}
        </div>
        <p className='uppercase py-5 text-gray-300'>Dates</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary of job Summary of job Summary of job Summary of job</li>
          <li>Summary of job Summary of job Summary of job Summary of job</li>
          <li>Summary of job Summary of job Summary of job Summary of job</li>
          <li>Summary of job Summary of job Summary of job Summary of job</li>
          <li>Summary of job Summary of job Summary of job Summary of job</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
