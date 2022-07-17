import React from 'react';
import ImagenPython from '../public/assets/python-icon.svg';
import Image from 'next/image';
import ImagenPost from '../public/assets/projects/python.png';
import Link from 'next/link';

const Blog = () => {
  return (
    <div id='blog' className='w-full h-screen md:px-20'>

      <div className='text-center pt-20 pb-4'>
          <h2 className='uppercase titulo'>
              Blog
          </h2>
      </div>

      <div className='flex flex-col md:space-between md:flex-row items-center justify-center'>

        <div className='hidden md:flex w-1/2'>
            <Image
              src={ImagenPython}
              alt='/'
              width='320'
              height='320'
            />
        </div>


        <div className='w-2/3 md:w-1/2 bg-[#282727] shadow-xl p-2
        flex flex-col justify-center items-center px-10'>
            <p className='my-4 akshar'>
            También tengo conocimientos en Python, cuento con una cuenta como creador donde subo contenido enseñando el lenguaje a 3k de personas
            </p>
            <Image
              src={ImagenPost}
              alt='/'
              width='250'
              height='250'
              className='rounded-sm'
            />

            <a target="_blank" rel="noreferrer" href='https://www.instagram.com/codigo.python/'  className="border-2 min-w-max bg-[#1f1d1d] border-slate-300 hover:border-slate-200 my-2 p-2 px-8 w-100 cursor-pointer hover:scale-x-105 ease-in duration-200 hover:bg-slate-300 hover:text-black">
              Ir a @codigo.python
            </a>
        </div>

        </div>
    </div>

    
  )
}

export default Blog