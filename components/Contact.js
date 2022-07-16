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
        <h1 className="uppercase">Contacto</h1>
      </div>


      <div className="flex flex-col md:space-between md:flex-row items-center justify-center">
        
        <div className="hidden md:flex w-1/2">
          <p>Texto</p>
        </div>

        <div className='w-2/3 md:w-1/2 bg-[#282727] shadow-xl p-2 rounded-md
        flex flex-col justify-center items-center'>
          <form className="flex flex-col w-full px-4">
          
            <label for="correo" class="block my-2 text-sm font-medium text-white-900">Correo:</label>

            <input className="border-2 border-gray-700 block rounded-sm p-1 w-full text-sm text-white-200 bg-white dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder=""/>



            <label for="nombres" class="block my-2 text-sm font-medium text-white-900">Nombres:</label>

            <input className="border-2 border-gray-700 block rounded-sm p-1 w-full text-sm text-white-200 bg-white dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder=""/>


            <label for="mensaje" class="block my-2 text-sm font-medium text-white-900">Mensaje:</label>
            <textarea id="mensaje" rows="8" className="border-2 border-gray-700 block rounded-sm p-1 w-full text-sm text-white-200 bg-white dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="" required></textarea>

            <div className="flex flex-col items-center">
            <button className="w-1/2 border-2 min-w-max border-slate-300 hover:border-slate-200 my-2 p-2">
              Enviar
            </button>
            </div>
          </form>

        </div>

      </div>

      <div className="flex flex-row justify-center space-x-4 my-3">
        <div className="rounded-full shadow-sm shadow-gray-200 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
          <FaLinkedinIn />
        </div>
        <div className="rounded-full shadow-sm shadow-gray-200 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
          <FaGithub />
        </div>
        <div className="rounded-full shadow-sm shadow-gray-200 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
          <AiOutlineMail />
        </div>
        <div className="rounded-full shadow-sm shadow-gray-200 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
          <AiFillInstagram />
        </div>
      </div>
    </div>
  );
};

export default Contact;
