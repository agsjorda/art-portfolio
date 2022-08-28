import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Let us Build This Together
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I am <span className='text-[#5651e5]'>Arthur</span>
          </h1>
          <h1 className='py-2 text-gray-700'> I'm a Front-End Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis
            repudiandae, exercitationem asperiores rem impedit? Optio aut rerum
            quaerat accusantium.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 curso-pointer hover:scale-110 ease-in duration-200'>
              <FaLinkedinIn />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 curso-pointer hover:scale-110 ease-in duration-200'>
              <FaFacebook />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 curso-pointer hover:scale-110 ease-in duration-200'>
              <FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 curso-pointer hover:scale-110 ease-in duration-200'>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
