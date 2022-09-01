import React from 'react';
import thom from '../public/assets/projects/thom.jpg';
import ProjectItem from './ProjectItem';
import crown from '../public/assets/projects/crwn-clothing.PNG';
import monsters from '../public/assets/projects/Monsters.PNG';
import hangman from '../public/assets/projects/Hangman.PNG';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-autp px-2 py-16 '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What Ive built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Crown Clothing'
            backgroundImg={crown}
            projectUrl='/clothes'
          />
          <ProjectItem
            title='Monsters Rolodex'
            backgroundImg={monsters}
            projectUrl='/clothes'
          />
          <ProjectItem
            title='Hangman'
            backgroundImg={hangman}
            projectUrl='/clothes'
          />
          <ProjectItem
            title='Arthur Portfolio'
            backgroundImg={thom}
            projectUrl='/clothes'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
