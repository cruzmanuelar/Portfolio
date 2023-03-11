import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AlertEmail = (respuesta) => {

    console.log('eenviaons')

    return respuesta 
    ? toast.success("Mensaje enviado con exito!", {
        theme: "dark"
      })
    : toast.error("Ha ocurrido un error, por favor intente mas tarde", {
        theme: "dark"
      })

}

export default AlertEmail