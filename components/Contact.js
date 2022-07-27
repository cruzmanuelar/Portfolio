import React, {useState} from "react";
import { AiOutlineMail, AiFillInstagram, } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import Zoom from 'react-reveal/Zoom';

import correoEnviado from "./alertas";

const Contact = () => {

  const [formState, setFormState] = useState({
    correoRemitente:'',
    nombre:'',
    mensaje:''
  })

  const onChangeInput = (e) => {
 
    setFormState({
      ...formState,[e.target.name]:e.target.value
    })
  }

  const enviarEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_2vvyvxr','template_ddzxczo',e.target,'F4ZSktT0j74lEh-B_')
    .then(response => console.log(response))
    .catch(error => console.log(error))

    correoEnviado();
    
    setFormState({
      correoRemitente:'',
      nombre:'',
      mensaje:''
    })
  }

  return (
    <div id="contact" className="w-full h-screen md:px-20">

      <Zoom bottom>
      <div className="flex flex-col h-full md:space-between items-center justify-center">

        <div className="text-center mt-20 pb-4">
          <h2 className="uppercase titulo">Contacto</h2>
        </div>

        <div className='w-2/3 sm:w-1/2 md:w-2/5 akshar bg-[#282727] shadow-xl p-2 rounded-sm
        flex flex-col justify-center items-center px-5 md:px-10'>
          <form className="flex flex-col w-full px-1 md:px-4" onSubmit={enviarEmail}>
          
            <label htmlFor="correo" className="block my-2 text-sm font-medium text-white-900">Correo remitente:</label>

            <input type='email' onChange={onChangeInput} value={formState.correoRemitente} name='correoRemitente' className="border-2 border-gray-500 block rounded-sm p-1 w-full text-sm text-white-200 bg-[#201e1e] dark:bg-[#201e1e] focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="" required/>


            <label htmlFor="nombres" className="block my-2 text-sm font-medium text-white-900">Nombres:</label>

            <input onChange={onChangeInput} value={formState.nombre} name='nombre' className="border-2 border-gray-500 block rounded-sm p-1 w-full text-sm text-white-200 dark:bg-[#201e1e] focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="" required/>


            <label htmlFor="mensaje" className="block my-2 text-sm font-medium text-white-900">Mensaje:</label>
            <textarea onChange={onChangeInput} value={formState.mensaje} name='mensaje' id="mensaje" rows="6" className="border-2 border-gray-500 block rounded-sm p-1 w-full text-sm text-white-200 bg-white dark:bg-[#201e1e] focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="" required></textarea>

            <div className="flex flex-col items-center">
            <button className="w-1/2 bg-[#1f1d1d] border-slate-300 hover:border-slate-200 border-2 min-w-max bg-black-400 my-2 p-2 cursor-pointer hover:scale-x-105 ease-in duration-200 hover:bg-slate-300 hover:text-black">
              Enviar
            </button>
            </div>
          </form>
        </div>

        </div>
      </Zoom>

      <div className="flex flex-row justify-center space-x-4 py-3">
        <a href="https://www.linkedin.com/in/cruzmanuelar/" rel="noreferrer"  target='_blank' className="icono-contact">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/cruzmanuelar" target='_blank' rel="noreferrer" className="icono-contact">
          <FaGithub />
        </a>
        <a href="#contact" rel="noreferrer" className="icono-contact">
          <AiOutlineMail />
        </a>
        <a href="https://www.instagram.com/codigo.python/" target='_blank'  rel="noreferrer" className="icono-contact">
          <AiFillInstagram/>
        </a>
        <ToastContainer autoClose={3000} position='bottom-right' hideProgressBar={false} pauseOnHover />
      </div>

    </div>
  );
};

export default Contact;
