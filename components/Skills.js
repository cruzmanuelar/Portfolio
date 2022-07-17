import React from 'react';
import Image from 'next/image';
import ImagenReact from '../public/assets/reactjs-icon.svg';
import ImagenJS from '../public/assets/javascript-icon.svg';
import ImagenGit from '../public/assets/git-scm-icon.svg';
import ImagenTrello from '../public/assets/trello-tile.svg';
import ImagenNext from '../public/assets/next-icon.webp';
import ImagenPostman from '../public/assets/getpostman-icon.svg';
import ImagenFigma from '../public/assets/figma-icon.svg';
import ImagenSass from '../public/assets/sass-lang-icon.svg';
import ImagenTailwind from '../public/assets/tailwindcss-icon.svg';

const Skills = () => {


  return (
    <div id='skills' className=''>

        <div className='flex flex-col md:space-between md:flex-col justify-center items-center w-full h-screen md:px-30'>

            <div className='text-center'>
                <h2 className='uppercase titulo'>
                    Habilidades
                </h2>
            </div>

            <div className='w-100'>
                <h3 className='text-center my-5'>Programación</h3>
                <div className='flex'>

                    <div className='mx-4 shadow-lg shadow-slate-300/30 rounded-md p-2 hover:shadow-slate-300/60 ease-in duration-200 hover:scale-105'>
                        <Image
                        src={ImagenJS}
                        alt='/'
                        width='80'
                        height='80'
                        />
                    </div>
                    
                    <div className='mx-4 shadow-lg shadow-slate-300/30 rounded-md p-2 hover:shadow-slate-300/60 ease-in duration-200 hover:scale-105'>
                        <Image
                        src={ImagenReact}
                        alt='/'
                        width='80'
                        height='80'
                        />
                    </div>

                    <div className='mx-4 shadow-lg shadow-slate-300/30 rounded-md p-2 hover:shadow-slate-300/60 ease-in duration-200 hover:scale-105'>
                        <Image
                        src={ImagenNext}
                        alt='/'
                        width='80'
                        height='80'
                        />
                    </div>

                    <div className='mx-4 shadow-lg shadow-slate-300/30 rounded-md p-2 hover:shadow-slate-300/60 ease-in duration-200 hover:scale-105'>
                        <Image
                        src={ImagenSass}
                        alt='/'
                        width='80'
                        height='80'
                        />
                    </div>

                    <div className='mx-4 shadow-lg shadow-slate-300/30 rounded-md p-2 hover:shadow-slate-300/60 ease-in duration-200 hover:scale-105'>
                        <Image
                        src={ImagenTailwind}
                        alt='/'
                        width='80'
                        height='80'
                        />
                    </div>


                </div>
            </div>
            
            <div className='w-100'>
                <h3 className='text-center my-5'>Herramientas</h3>
                <div className='flex'>
                    <div className='mx-4 shadow-lg shadow-slate-300/30 rounded-md p-2 hover:shadow-slate-300/60 ease-in duration-200 hover:scale-105'>
                        <Image
                        src={ImagenPostman}
                        alt='/'
                        width='80'
                        height='80'
                        />
                    </div>

                    <div className='mx-4 shadow-lg shadow-slate-300/30 rounded-md p-2 hover:shadow-slate-300/60 ease-in duration-200 hover:scale-105'>
                        <Image
                        src={ImagenFigma}
                        alt='/'
                        width='80'
                        height='80'
                        />
                    </div>

                    <div className='mx-4 shadow-lg shadow-slate-300/30 rounded-md p-2 hover:shadow-slate-300/60 ease-in duration-200 hover:scale-105'>
                        <Image
                        src={ImagenGit}
                        alt='/'
                        width='80'
                        height='80'
                        />
                    </div>

                    <div className='mx-4 shadow-lg shadow-slate-300/30 rounded-md p-2 hover:shadow-slate-300/60 ease-in duration-200 hover:scale-105'>
                        <Image
                        src={ImagenTrello}
                        alt='/'
                        width='80'
                        height='80'
                        />
                    </div>

                </div>
            </div>




    </div>

    </div>
  )
}

export default Skills