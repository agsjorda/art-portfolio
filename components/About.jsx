import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div
      id='about'
      className='w-full md:h-screen mx-auto p-2 flex items-center py-16'
    >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl -tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600 indent-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            itaque doloribus! Rem facere asperiores repellat, quaerat quo amet
            iusto corrupti reprehenderit vel necessitatibus, quasi aspernatur
            dolor non, repellendus doloremque saepe?
          </p>
          <p className='py-2 text-gray-600 indent-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            itaque doloribus! Rem facere asperiores repellat, quaerat quo amet
            iusto corrupti reprehenderit vel necessitatibus, quasi aspernatur
            dolor non, repellendus doloremque saepe?
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Check out some of my latest projects
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-200'>
          <Image
            className='rounded-xl'
            src='/../public/assets/undraw_Profile.png'
            width='800'
            height='800'
            alt='/'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
