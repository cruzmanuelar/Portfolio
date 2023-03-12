import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import { AiFillEye } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";


const Main = () => {

  const [ hoverCv, setHoverCv ] = useState(false)

  return (
    <div id='main' className='w-full h-screen text-center'>
      
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
              
                <h1 className='my-3 akshar name'>Manuel Cruz</h1>
                <p id='rol' className='akshar upeercase my-2 sm:text-xl md:text-xl text-base text-white'>Desarrollador web FullStack Jr</p>
                <div className="flex flex-col sm:flex-row justify-center items-center">

                  <button className="mx-1 bg-[#1f1d1d] border-2 border-slate-300 hover:border-slate-200 my-2 p-2 px-8 cursor-pointer  ease-linear transition duration-300 hover:bg-slate-300 hover:text-black w-44">
                    <a href='#about'>Sobre mí</a>
                  </button>

                  <div className="w-44 flex"
                    onMouseLeave={() => setHoverCv(false)}
                  >
                    <button
                      onMouseEnter={() => setHoverCv(true)}
                      className={`${hoverCv ? 'w-1/3 ':'w-44 border-r-2'} cursor-auto bg-[#1f1d1d] border-t-2 border-l-2 border-b-2 border-slate-300 hover:border-slate-200 my-2 p-2 px-2 ease-linear duration-300`}>
                      CV
                    </button>
                    <a className={`bg-[#1f1d1d] border-2 border-slate-300 hover:border-slate-200 hover:bg-slate-300 hover:text-black my-2 p-2 px-2 cursor-pointer ease-linear transition duration-300 ${hoverCv ? 'w-1/3':'hidden'} flex justify-center items-center`}  href='/assets/descargas/CV_Manuel.pdf' download>
                      <BiDownload size={22}/>
                    </a>
                    <a className={`bg-[#1f1d1d] border-t-2 border-r-2 border-b-2 border-slate-300 hover:border-slate-200 hover:bg-slate-300 hover:text-black my-2 p-2 px-2 cursor-pointer ease-linear transition duration-300 ${hoverCv ? 'w-1/3':'hidden'} flex justify-center items-center`} href='/files/CV_Manuel.pdf' target='_blank'>
                      <AiFillEye size={22}/>
                    </a>

                  </div>
                </div>
            </div>
        </div>  
      </div>
  )
}

export default Main