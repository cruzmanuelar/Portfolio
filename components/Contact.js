import React, {useState} from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import emailjs from '@emailjs/browser';
import AlertEmail from "./AlertEmail";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [formState, setFormState] = useState({
    correoRemitente:'',
    nombre:'',
    mensaje:''
  })

  const [ enviando, setEnviando ] = useState(false);  

  const onChangeInput = (e) => {
 
    setFormState({
      ...formState,[e.target.name]:e.target.value
    })
  }

  const enviarEmail = async (e) =>{

    let respuesta = true

    setEnviando(true)
    e.preventDefault()

    await emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      e.target,
      process.env.NEXT_PUBLIC_KEY_PUBLIC)
    .then(response => console.log(response))
    .catch(error => respuesta = false)

    AlertEmail(respuesta)
    if(respuesta){
      setFormState({
        correoRemitente:'',
        nombre:'',
        mensaje:''
      })
    }

    setEnviando(false);

  }

  return (
    <div id="contact" className="w-full h-screen md:px-20">

      <div className="flex flex-col h-full md:space-between items-center justify-center">

        <div className="text-center mt-20 pb-4">
          <h2 className="uppercase titulo">Contacto</h2>
        </div>

        <div className='w-2/3 sm:w-1/2 md:w-3/5 lg:w-2/5 xl:w-2/5 akshar bg-[#282727] shadow-xl py-2 md:py-5 rounded-sm
        flex flex-col justify-center items-center px-5'>
          <form className="flex flex-col w-full px-1 md:px-4" onSubmit={enviarEmail}>

          
            <label htmlFor="correo" className="block my-2 text-sm font-medium text-white-900">Remitente:</label>

            <input type='email' onChange={onChangeInput} value={formState.correoRemitente} name='correoRemitente' className="border-2 border-gray-500 block rounded-sm p-1 w-full text-sm text-white-200 bg-[#201e1e] dark:bg-[#201e1e] focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="" autoComplete="off" required/>


            <label htmlFor="nombres" className="block my-2 text-sm font-medium text-white-900">Asunto:</label>

            <input onChange={onChangeInput} value={formState.nombre} name='nombre' className="border-2 border-gray-500 block rounded-sm p-1 w-full text-sm text-white-200 bg-[#201e1e] focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="" autoComplete="off" required/>


            <label htmlFor="mensaje" className="block my-2 text-sm font-medium text-white-900">Mensaje:</label>
            <textarea onChange={onChangeInput} value={formState.mensaje} name='mensaje' id="mensaje" rows="6" className="border-2 border-gray-500 block rounded-sm p-1 w-full text-sm text-white-200 bg-[#201e1e] focus:ring-0 dark:text-white dark:placeholder-gray-400" autoComplete="off" placeholder="" required></textarea>

            <div className="flex flex-col items-center">
            <button className="w-1/2 bg-[#1f1d1d] border-slate-300 hover:border-slate-200 border-2 min-w-max bg-black-400 mt-4 p-2 cursor-pointer hover:scale-x-105 ease-in duration-200 hover:bg-slate-300 hover:text-black flex justify-center">
              {enviando? <AiOutlineLoading3Quarters className='animate-spin'/>: 'Enviar'}
            </button>
            </div>
          </form>
        </div>

        </div>




    </div>
  );
};

export default Contact;
