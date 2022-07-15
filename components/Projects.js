import React from 'react';
import Image from 'next/image';
import ImagenProyecto from '../public/assets/projects/web3.jpg';

const Projects = () => {
  return (
    <div id='projects' className='w-full h-screen'>
      
      <div className='text-center pt-20 pb-5'>
        <h1 className='uppercase'>
          Proyectos
        </h1>
      </div>

      <div className='flex items-center flex-col md:flex-row justify-center mx-4'>

        <div className='w-3/3 md:w-2/3 flex flex-wrap justify-center'>

          <div className='w-1/1 md:1/2 text-center shadow-lg shadow-slate-600/50 hover:shadow-slate-300/20 ease-in duration-300 m-2'>
            <Image
              src={ImagenProyecto}
              alt='/'
              width='320'
              height='200'
            />
          </div>
          <div className='w-1/1 md:1/2 text-center shadow-lg shadow-slate-600/50 hover:shadow-slate-300/20 ease-in duration-300 m-2'>
            <Image
              src={ImagenProyecto}
              alt='/'
              width='320'
              height='200'
            />
          </div>
          <div className='w-1/1 md:1/2 text-center shadow-lg shadow-slate-600/50 hover:shadow-slate-300/20 ease-in duration-300 m-2'>
            <Image
              src={ImagenProyecto}
              alt='/'
              width='320'
              height='200'
            />
          </div>
          <div className='w-1/1 md:1/2 text-center shadow-lg shadow-slate-600/50 hover:shadow-slate-300/20 ease-in duration-300 m-2'>
            <Image
              src={ImagenProyecto}
              alt='/'
              width='320'
              height='200'
            />
          </div>
        </div>

        <div className='md:w-1/3 flex flex-row md:flex-col items-center flex-wrap justify-center'>
          <div className='w-1/1shadow-slate-300/30 shadow-lg shadow-slate-600/50 hover:shadow-slate-300/20 ease-in duration-300 m-2'>
            <Image
              src={ImagenProyecto}
              alt='/'
              width='320'
              height='200'
            />
          </div>
          <div className='w-1/1shadow-slate-300/30 shadow-lg shadow-slate-600/50 hover:shadow-slate-300/20 ease-in duration-300 m-2'>
            <Image
              src={ImagenProyecto}
              alt='/'
              width='320'
              height='200'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects