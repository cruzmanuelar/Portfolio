import React from 'react';



const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='my-3 akshar name'>Manuel Cruz</h1>
                <p id='rol' className='akshar upeercase my-2 text-lg text-white'>Desarrollador Frontend - React</p>

                <button className="mx-1 bg-[#1f1d1d] border-2 border-slate-300 hover:border-slate-200 hover:bg-slate-300 hover:text-black my-2 p-2 px-8 cursor-pointer hover:scale-y-105 ease-linear duration-300">
                  <a href='/assets/descargas/CV_Manuel.pdf' download>Descargar CV</a>
                </button>
                
                <button className="mx-1 bg-[#1f1d1d] border-2 border-slate-300 hover:border-slate-200 my-2 p-2 px-8 cursor-pointer hover:scale-y-105 ease-linear duration-300 hover:bg-slate-300 hover:text-black">
                  <a href='#about'>Sobre mí</a>
                </button>
            </div>
        </div>  
    </div>
  )
}

export default Main