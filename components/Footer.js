import React from 'react'
import { AiOutlineMail, AiFillInstagram, } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center space-x-4 w-full py-3 bg-[#171717] border-t-2 border-zinc-700">
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
  </div>
  )
}

export default Footer