import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import coKanje from "../public/assets/projects/coKanje.png";
import pixabay from "../public/assets/projects/pixabay.png";
import dremate from "../public/assets/projects/dremate.png";
import talentWork from "../public/assets/projects/talentWork.png";
import {AiFillGithub} from 'react-icons/ai';
import {BiLinkExternal} from 'react-icons/bi';

const Projects = () => {

  return (
    <div id="projects" className="w-full md:px-20">
      <div className="text-center pt-20 pb-4">
        
        <h2 className="uppercase titulo">Proyectos</h2>

        <div className="grid mx-4 md:mx-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4">
          
          <div className="bg-neutral-900 rounded-md rounded-b-md shadow-md shadow-slate-300/30 duration-300 hover:scale-105 mx-2 hover:bg-black">
            <h4 className="bg-black rounded-md py-1">coKanje</h4>
            <Image
            src={coKanje}
            />
            <div className="flex flex-wrap justify-center">

              <span className="bg-red-600 px-2 rounded-full text-sm mx-2 my-1">React</span>
              <span className="bg-blue-600 px-2 rounded-full text-sm mx-2 my-1">Laravel</span>
              <span className="bg-green-600 px-2 rounded-full text-sm mx-2 my-1">React-Bootstrap</span>
              <span className="bg-amber-400 px-2 rounded-full text-sm mx-2 my-1">SQL</span>
            </div>

            <div className="flex justify-around my-1">
              <a href="https://github.com/cruzmanuelar/sis_canje_fronted" rel="noreferrer" target='_blank' className="cursor-pointer">
              <AiFillGithub size={20}/>
              </a>
              <a href="https://cokanje.vercel.app" rel="noreferrer" target='_blank' className="cursor-pointer">
              <BiLinkExternal size={20} />
              </a>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-md shadow-md shadow-slate-300/30 duration-300 hover:scale-105 mx-2 hover:bg-black">
          <h4 className="bg-black rounded-md py-1">apiPixabay</h4>
            <Image
            src={pixabay}
            />
            <div className="flex flex-wrap justify-center">
              <span className="bg-red-600 px-2 rounded-full text-sm mx-2 my-1">React</span>
              <span className="bg-blue-600 px-2 rounded-full text-sm mx-2 my-1">Bootstrap</span>
            </div>
            <div className="flex justify-around my-1">
              <a href="https://github.com/cruzmanuelar/ReactApiPixabay" rel="noreferrer" target='_blank' className="cursor-pointer">
              <AiFillGithub size={20} />
              </a>
              <a href="https://react-api-pixabay.vercel.app" rel="noreferrer" target='_blank' className="cursor-pointer">
              <BiLinkExternal size={20}/>
              </a>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-md shadow-md shadow-slate-300/30 duration-300 hover:scale-105 mx-2 hover:bg-black">
          <h4 className="bg-black rounded-md py-1">dRemate</h4>
            <Image
            src={dremate}
            />

            <div className="flex flex-wrap justify-center">
              <span className="bg-red-600 px-2 rounded-full text-sm mx-2 my-1">Livewire</span>
              <span className="bg-blue-600 px-2 rounded-full text-sm mx-2 my-1">Laravel</span>
              <span className="bg-green-600 px-2 rounded-full text-sm mx-2 my-1">Bootstrap</span>
              <span className="bg-amber-400 px-2 rounded-full text-sm mx-2 my-1">SQL</span>
            </div>

            <div className="flex justify-around my-1">
            <a href="https://github.com/frankpomiano19/Proyecto-dRemate" rel="noreferrer" target='_blank' className="cursor-pointer">
            <AiFillGithub size={20} />
            </a>
            <a href="https://dremate.herokuapp.com" rel="noreferrer" target='_blank' className="cursor-pointer">
            <BiLinkExternal size={20} />
            </a>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-md shadow-md shadow-slate-300/30 duration-300 hover:scale-105 mx-2 hover:bg-black">
            <h4 className="bg-black rounded-md py-1">talentWork</h4>
            <Image
            src={talentWork}
            />
            <div className="flex flex-wrap justify-center">
              <span className="bg-red-600 px-2 rounded-full text-sm mx-2 my-1">Livewire</span>
              <span className="bg-blue-600 px-2 rounded-full text-sm mx-2 my-1">Laravel</span>
              <span className="bg-green-600 px-2 rounded-full text-sm mx-2 my-1">Bootstrap</span>
              <span className="bg-amber-400 px-2 rounded-full text-sm mx-2 my-1">SQL</span>
            </div>
            <div className="flex justify-around my-1">
            <a href="https://github.com/HuamanAngel/TalentWork" rel="noreferrer" className="cursor-pointer">
            <AiFillGithub size={20}  />
            </a>
            <a href="http://talentwork.herokuapp.com/" rel="noreferrer" className="cursor-pointer">
            <BiLinkExternal size={20}  />
            </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
