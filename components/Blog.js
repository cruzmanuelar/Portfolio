import React from 'react';
import ImagenPython from '../public/assets/python-icon.svg';
import Image from 'next/image';
import ImagenPost from '../public/assets/projects/python.png';

const Blog = () => {
  return (
    <div id='blog' className='w-full h-screen md:px-20'>

      <div className="flex h-full flex-col md:space-between pt-10 items-center justify-center">
        <div className='mt-20'>
          <h2>BLOG</h2>
        </div>

        <div className='flex justify-center items-center space-between mt-4'>
          
          <div className='mx-5 hidden md:flex'>
            <Image
              src={ImagenPython}
              width='300'
              height='300'
            />
          </div>

          <div className='flex flex-col p-5 mx-5 justify-center items-center w-2/3 sm:w-1/2 md:w-1/3 bg-[#282727] shadow-xl'>
            <p className='my-4 akshar'>
              Mi pasión por la programación también me ha llevado a aprender Python, parte del conocimiento adquirido lo comparto en @codigo.python
            </p>
            <Image
              src={ImagenPost}
              width='250'
              height='250'
            />
            <a target="_blank" rel="noreferrer" href='https://www.instagram.com/codigo.python/'  className="border-2 min-w-max bg-[#1f1d1d] border-slate-300 hover:border-slate-200 my-2 p-2 px-8 w-100 cursor-pointer hover:scale-x-105 ease-in duration-200 hover:bg-slate-300 hover:text-black">
              Ir a @codigo.python
            </a>
          </div>

        </div>
      </div>
    </div>

    
  )
}

export default Blog