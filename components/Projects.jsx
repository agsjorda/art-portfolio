import Image from 'next/image';
import React from 'react';
import thom from '../public/assets/projects/thom.jpg';

const Projects = () => {
  return (
    <div id='project' className='w-full'>
      <div className='max-w-[1240px] mx-autp px-2 py-16 '></div>
      <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
        Projects
      </p>
      <h2 className='py-4'>What I've built</h2>
      <div className='grid md:grid-cols-2 gap-8'>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-graient-to-r from-[#5651e5] to-[#70dff]'>
          <Image src={thom} alt='/' />
        </div>
      </div>
    </div>
  );
};

export default Projects;
