import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import projects from "../public/assets/proyectos";
import coKanje from "../public/assets/projects/coKanje.png";

const Projects = () => {
  const [proyecto, setProyecto] = useState({id:null,nombre:'',repositorio:'',enlace:''});

  const clearProject = () =>{
    setProyecto({...proyecto, id:null,nombre:'',repositorio:'',enlace:''});
  }

  return (
    <div id="projects" className="w-full md:px-20">
      <div className="text-center pt-20 pb-4">
        
        <h2 className="uppercase titulo">Proyectos</h2>

        <div className="hidden relative flex flex-wrap cursor-pointer">

          {projects.map(project => (
          <motion.div
            className='w-1/2 px-2 md:w-1/3'
            layoutId={project.id}
            key={project.id}
            onClick={() => setProyecto({...proyecto, id:project.id,nombre:project.nombre,repositorio:project.repositorio,enlace:project.enlace})}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
            <p>{project.nombre}</p>
            <Image
            // layout="fill"
            height='200px'
            width='400px'
            src={project.imagen}
            />
          </motion.div>

        ))}


          <div className="absolute top-0 right-1/2flex justify-center">
            <AnimatePresence
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              {proyecto.id && (
                <motion.div
                  layoutId={proyecto.id}
                  onClick={clearProject}
                  style={{
                    width: "400px",
                    top: "0px",
                    height: 400,
                    border: "1px solid white",
                    backgroundColor: "red",
                  }}
                  
                >
                  <motion.button onClick={clearProject} />
                  <div>{proyecto.nombre}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
