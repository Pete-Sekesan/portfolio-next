/* eslint-disable react/jsx-key */
import React from 'react';

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>
      <div>
        <div className='relative w-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 '>
          {projects.map((project, i) => (
            <div className='w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '>
              <img
                src='https://s3.eu-west-1.amazonaws.com/matrix.assets/6fhb8d6xigynrgi5v3ffri5veksb'
                alt=''
              />
              <div className=' space-y-10 px-0 md:px-10 mac-w-6xl'>
                <h4 className=' text-4xl font-semibold text-center'>
                  Project Name {i + 1} of {projects.length}
                </h4>
                <p className='text-lg text-center md:text-left'>
                  This app was created to continue my React Hooks skills along
                  with React Material UI, while also tapping into some important
                  data this day in age. I utilized the React-ChartJS 2 library
                  to help display in a doughnut graph the daily total count of
                  Covid-19 cases and deaths by country. This data was pulled in
                  using Axios from the https://covid19.mathdro.id/api API that
                  scrapes government data sites for up to date numbers.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
      </div>
    </div>
  );
}

export default Projects;
