
import Particles from "react-tsparticles";

const ParticlesComponent = ({particlesInit, particlesLoaded}) => {
    return       <Particles
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
}

export default ParticlesComponent