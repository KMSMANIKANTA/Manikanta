import React, { useEffect } from 'react'
import mine from './mine.jpg'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import './Hero.css'
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css'
const Hero = () => {
  const [text]=useTypewriter({
    words:["Designer"," Frontend-Developer"],
    typeSpeed:150,
    loop:{}
  })
  useEffect(()=>{
    Aos.init({
      duration:2000
    })
  })
  return (
    <div className='hero'>
      <div className="myImage" data-aos='slide-right'>
        <img src={mine}  alt="KMSM"  />
      </div>
      <div className="content">
        <h2 className="first" data-aos='fade-left'>Hello,It's me... </h2>
        <h1 className='name' data-aos='fade-right'>K.M.S.Manikanta</h1>
        <h2 className='second' data-aos='zoom-in'>I am a <span>{text}</span><Cursor cursorColor='white'/></h2>
        <p data-aos='zoom-out' >I am a Frontend Developer with extensive experience over 2-years and expertised in Creating website design and Frontend Design and many more....</p>
        <div className="socialicons">
    
          <a href="https://www.instagram.com/kms.manikanta_naidu/?next=%2F" className="iconcover" >
          <FaInstagram className='icon' data-aos='zoom-in' />
          </a>
  
          <a href="#" className="iconcover" >
            <FaFacebookF className='icon' data-aos='zoom-in'/>
            </a>
          <a href="https://github.com/KMSMANIKANTA" className="iconcover">
          <FiGithub className='icon'data-aos='zoom-in'/>
          </a>
          <a href="#" className="iconcover" >

            <CiTwitter className='icon' data-aos='zoom-in'/>
            </a>
      
        </div>
      </div>
    </div>
  )
}

export default Hero
