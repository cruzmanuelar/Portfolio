import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { AiFillCaretUp } from "react-icons/ai";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Home() {


  const [botonarriba, setBotonarriba] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',scrollUp);

    return () => {
      window.removeEventListener('scroll',scrollUp);
    }
  },[])

  const scrollUp = () =>{
    if(window.pageYOffset > 450){
      setBotonarriba(true);
    }else{
      setBotonarriba(false);
    }
  }

  const topPage = () => {
    window.scrollTo({
      top:0,
  })
  }

  const particlesInit = async (main) => {

    await loadFull(main);
  };
  const particlesLoaded = (container) => {

  };

  return (
    <div>
      <Head>
        <title>Manuel Cruz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/react.ico" />
      </Head>
      <Navbar/>
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#18181b",
          },
        },
        fullScreen:{
          enable:true,
          zIndex:-1
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onhover: {
              enable: false,
              mode: "bubble"
            },
            onclick: {
              enable: true,
              mode: "repulse"
            },
            resize: true
          },
          modes: {
            push: {
              particles_nb:1
            },
            bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
              speed: 2
            },
            repulse: {
              distance: 200,
              duration: 0.7
            },
            remove: {
              particles_nb: 2
            }
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            value:160,
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 1,
            random:true,
            anim:{
              enable:true,
              speed:0.5,
              opacity_min:0,
              sync:false
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              width: 100,
              height: 100
            },
            line_linked: {
              enable: false,
              distance: 1,
              color: "#000000",
              opacity: 1,
              width: 0
            },
          },
          size: {
            value: 2,
            random:true,
            anim:{
              enable:false,
              speed:1,
              size_min:0.3,
              sync:false
            }
          },
        },
        detectRetina: true,
      }}
    />
      <Main/>
      <Fade top>
        <About/>
      </Fade>
      <Fade bottom>
        <Skills/>
      </Fade>
      <Fade top>
        <Projects/>
      </Fade>
      <Zoom bottom>
        <Contact/>
      </Zoom>

      {botonarriba === true &&
      <button className='fixed border-2  hover:-translate-y-3 duration-100 bg-[#131212] rounded-md bottom-12 right-12' style={{
        fontSize: "50px"
        }}
        onClick={topPage}>
        <AiFillCaretUp />
      </button>
      }
    </div>
  )
}
