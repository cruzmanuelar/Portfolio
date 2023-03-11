import React from 'react';

const About = () => {
  return (
    <div id='about' className='flex flex-col md:space-between md:flex-row items-center justify-center w-full h-screen md:px-20'>

        <div className='hidden w-1/2'>
            <p>Manuel Cruz<br/>Desarrollador Frontend</p>
        </div>


          <div className='mt-20 w-2/3 sm:w-2/3 md:w-2/3 lg:1/2 bg-[#282727] shadow-xl p-6 rounded-md flex flex-col items-center px-10'>
              <h2 className='text-center my-4 titulo'>SOBRE MI</h2>
              <div className='my-2'>
                <p className='akshar hidden sm:block'>Estudiante de los últimos ciclos de Ingeniería de Software en la Universidad Nacional Mayor de San Marcos.
                </p>
                <p className='akshar'><br/>Mi objetivo es especializarme en el desarrollo FullStack, seguir creciendo profesionalmente y aportar mis habilidades en los proyectos que esté involucrado.
                </p>
                <p className='hidden md:flex akshar'><br/>Con experiencia desarrollando aplicaciones web durante mi formación académica a través de la metodología SCRUM.
                </p>
              </div>
              <a href='#projects' className="border-2 uppercase bg-[#1f1d1d] border-slate-300 hover:border-slate-200 my-2 p-2 px-8 w-100 cursor-pointer hover:scale-x-105 ease-in duration-200  hover:bg-slate-300 hover:text-black">Proyectos</a>
          </div>

    </div>
  )
}

export default About