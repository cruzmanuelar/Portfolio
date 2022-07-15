import React from 'react'

const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='my-3'>Manuel Cruz</h1>
                <p className='upeercase my-2 text-lg text-white'>Desarrollador Fronted Jr</p>
                <button className="border-2 border-slate-300 hover:border-slate-200 my-2 p-2 px-8">Más sobre mi</button>
            </div>
        </div>         
    </div>
  )
}

export default Main