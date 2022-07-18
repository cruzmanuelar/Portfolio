import React, {useState} from 'react';
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail,AiFillInstagram} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {Gi3DMeeple} from 'react-icons/gi';
import { FaReact } from "react-icons/fa";
const NavBar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className='fixed w-full h-16 shadow-xl z-[100] bg-[#131212]'>

            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                
                <div>
                    <FaReact className='spin-call' size={40}/>
                </div>

                <div className=''>
                    <ul className='hidden md:flex'>
                        <Link href='/#main'>
                            <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>Inicio
                            </li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b  cursor-pointer'>Sobre mí
                            </li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b  cursor-pointer'>Habilidades
                            </li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b  cursor-pointer'>Proyectos
                            </li>
                        </Link>
                        {/* <Link href='/#blog'>
                            <li className='ml-10 text-sm uppercase hover:border-b  cursor-pointer'>Blog
                            </li>
                        </Link> */}
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b  cursor-pointer'>Contacto
                            </li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu className='cursor-pointer' size={30}/>
                    </div>
                </div>


                <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen ' : ''}>
                    <div className={nav
                            ? 'fixed left-0 top-0 w-[70%] sm:w-[50%] md:w-[30%] h-screen bg-[#141414] p-10 ease-in duration-500'
                            : 'fixed left-[-200%] top-0 p-10 ease-in duration-500'}>
                        <div>
                            <div className='flex w-full items-center justify-between'>
                                <FaReact className='spin-call' size={40}/>
                                <div onClick={handleNav} className='rounded-full shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                                    <AiOutlineClose/>
                                </div>
                            </div>
                            <div className='border-b border-gray-300 my-4'>
                                <p className='w-[85] md:w-[90] py-4'>Manuel Cruz</p>
                            </div>
                        </div>
                        <div className='py-4 flex flex-col'>
                            <ul className='uppercase'>
                                <Link href='/#main'>
                                    <li className='py-4 text-sm  cursor-pointer'>Inicio
                                    </li>
                                </Link>
                                <Link href='/#about'>
                                    <li className='py-4 text-sm cursor-pointer'>Sobre mí
                                    </li>
                                </Link>
                                <Link href='/#skills'>
                                    <li className='py-4 text-sm cursor-pointer'>Habilidades
                                    </li>
                                </Link>
                                <Link href='/#projects'>
                                    <li className='py-4 text-sm cursor-pointer'>Proyectos
                                    </li>
                                </Link>
                                {/* <Link href='/#blog'>
                                    <li className='py-4 text-sm cursor-pointer'>Blog
                                    </li>
                                </Link> */}
                                <Link href='/#contact'>
                                    <li className='py-4 text-sm cursor-pointer'>Contacto
                                    </li>
                                </Link>
                            </ul>
                            <div className=''>
                                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <a href="https://www.linkedin.com/in/cruzmanuelar/" target='_blank' rel="noreferrer" className="rounded-full shadow-sm shadow-gray-200 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                                <FaLinkedinIn />
                                </a>
                                <a href="https://github.com/cruzmanuelar" target='_blank' rel="noreferrer"  className="rounded-full shadow-sm shadow-gray-200 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                                <FaGithub />
                                </a>
                                <a href="#contact" rel="noreferrer"  className="rounded-full shadow-sm shadow-gray-200 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                                <AiOutlineMail />
                                </a>
                                <a href="https://www.instagram.com/codigo.python/" target='_blank' rel="noreferrer"  className="rounded-full shadow-sm shadow-gray-200 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                                <AiFillInstagram />
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBar;