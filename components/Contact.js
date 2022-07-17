import React from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full md:px-20">

      <div className="text-center pt-20 pb-4">
        <h2 className="uppercase titulo">Contacto</h2>
      </div>


      <div className="flex flex-col md:space-between md:flex-row items-center justify-center">
        
        <div className="hidden md:flex w-1/2 mx-5 akshar">
          <p>Puedes contactarme a través del formulario o escribirme al correo: cruzmanuelar@gmail.com</p>
        </div>

        <div className='w-2/3 md:w-1/2 akshar bg-[#282727] shadow-xl p-2 rounded-md
        flex flex-col justify-center items-center'>
          <form className="flex flex-col w-full px-4">
          
            <label htmlFor="correo" className="block my-2 text-sm font-medium text-white-900">Correo remitente:</label>

            <input className="border-2 border-gray-500 block rounded-sm p-1 w-full text-sm text-white-200 bg-[#201e1e] dark:bg-[#201e1e] focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="" required/>


            <label htmlFor="nombres" className="block my-2 text-sm font-medium text-white-900">Nombres:</label>

            <input className="border-2 border-gray-500 block rounded-sm p-1 w-full text-sm text-white-200 dark:bg-[#201e1e] focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="" required/>


            <label htmlFor="mensaje" className="block my-2 text-sm font-medium text-white-900">Mensaje:</label>
            <textarea id="mensaje" rows="6" className="border-2 border-gray-500 block rounded-sm p-1 w-full text-sm text-white-200 bg-white dark:bg-[#201e1e] focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="" required></textarea>

            <div className="flex flex-col items-center">
            <button className="w-1/2 bg-[#1f1d1d] border-slate-300 hover:border-slate-200 border-2 min-w-max bg-black-400 my-2 p-2 cursor-pointer hover:scale-x-105 ease-in duration-200">
              Enviar
            </button>
            </div>
          </form>

        </div>

      </div>

      <div className="flex flex-row justify-center space-x-4 my-3">
        <a href="https://www.linkedin.com/in/cruzmanuelar/" target='_blank' className="rounded-full shadow-sm shadow-gray-200 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/cruzmanuelar" target='_blank' className="rounded-full shadow-sm shadow-gray-200 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
          <FaGithub />
        </a>
        <a href="#contact" className="rounded-full shadow-sm shadow-gray-200 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
          <AiOutlineMail />
        </a>
        <a href="https://www.instagram.com/codigo.python/" target='_blank'  className="rounded-full shadow-sm shadow-gray-200 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
          <AiFillInstagram />
        </a>
      </div>
    </div>
  );
};

export default Contact;
