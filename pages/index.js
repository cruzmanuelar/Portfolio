import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { AiFillCaretUp } from "react-icons/ai";

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

  return (
    <div>
      <Head>
        <title>Manuel Cruz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/react.ico" />
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>

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
