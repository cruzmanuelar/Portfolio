import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail,AiFillInstagram} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import { FaReact } from "react-icons/fa";
const NavBar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(()=> {

    },[nav])

    return(
        <div className='fixed w-full h-16 shadow-xl z-[100] bg-[#171717]'>

            <div className='flex justify-center items-center w-full h-full px-2 2xl:px-16 shadow-md hover:shadow-zinc-700 transition duration-300'>
                
                <div></div>
                <div className=''  onClick={handleNav} >
                    <ul className='hidden md:flex'>
                        <Link href='/#main'>
                            <li className='uppercase hover:border-b transition duration-1000 ease-in-out cursor-pointer'>Inicio
                            </li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 uppercase hover:border-b transition duration-1000 ease-in-out cursor-pointer'>Sobre mí
                            </li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 uppercase hover:border-b transition duration-1000 ease-in-out  cursor-pointer'>Habilidades
                            </li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 uppercase hover:border-b transition duration-1000 ease-in-out cursor-pointer'>Proyectos
                            </li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 uppercase hover:border-b transition duration-1000 ease-in-out cursor-pointer'>Contacto
                            </li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu className='cursor-pointer' size={30}/>
                    </div>
                </div>


                <div className={nav ? 'sm:hidden md:hidden fixed left-0 top-0 w-full h-screen ' : ''}>
                    <div className={nav
                            ? 'fixed left-0 top-0 w-[70%] sm:w-[50%] md:w-[30%] h-full bg-[#141414] px-5 py-2 ease-in duration-500 grid grid-cols-1 content-between'
                            : 'fixed left-[-200%] top-0 p-10 ease-in duration-500 h-full grid grid-cols-1 content-between'}>
                        <div>
                            <div>
                                <div className='flex w-full items-center justify-between'>
                                    <div className='border-b border-gray-300 my-4'>
                                        <p className='w-[85] md:w-[90] py-4 text-lg'>Manuel Cruz</p>
                                    </div>
                                    <div onClick={handleNav} className='rounded-full border-2 border-slate-300 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                                        <AiOutlineClose/>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='py-4 flex flex-col'>
                                <ul className='uppercase'>
                                    <Link href='/#main'>
                                        <li 
                                        onClick={handleNav}
                                        className='py-3 text-md hover:border-b-2 text-md cursor-pointer'>Inicio
                                        </li>
                                    </Link>
                                    <Link href='/#about'>
                                        <li 
                                        onClick={handleNav}
                                        className='py-3  text-md hover:border-b-2 cursor-pointer'>Sobre mí
                                        </li>
                                    </Link>
                                    <Link href='/#skills'>
                                        <li
                                        onClick={handleNav}
                                        className='py-3 text-md hover:border-b-2 text-md cursor-pointer'>Habilidades
                                        </li>
                                    </Link>
                                    <Link href='/#projects'>
                                        <li 
                                        onClick={handleNav}
                                        className='py-3 text-md hover:border-b-2 text-md cursor-pointer'>Proyectos
                                        </li>
                                    </Link>

                                    <Link href='/#contact'>
                                        <li 
                                        onClick={handleNav}
                                        className='py-3 text-md hover:border-b-2 text-md cursor-pointer'>Contacto
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center space-x-2'>
                            <div className='flex items-center justify-between my-4 w-2/3 sm:w-[80%]'>
                                <a href="https://www.linkedin.com/in/cruzmanuelar/" target='_blank' rel="noreferrer" className="icono-contact hover:bg-slate-700">
                                <FaLinkedinIn />
                                </a>
                                <a href="https://github.com/cruzmanuelar" target='_blank' rel="noreferrer"  className="icono-contact hover:bg-slate-700">
                                <FaGithub />
                                </a>
                                <a href="#contact" rel="noreferrer"  className="icono-contact hover:bg-slate-700">
                                <AiOutlineMail />
                                </a>
                                <a href="https://www.instagram.com/codigo.python/" target='_blank' rel="noreferrer"  className="icono-contact hover:bg-slate-700">
                                <AiFillInstagram />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBar;