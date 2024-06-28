import React, { useEffect } from 'react'
import './Hero.css'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import image from './mine.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

import { BsGithub } from "react-icons/bs";

const Hero = () => {
  const [text]=useTypewriter({
    words:["Designer"," Frontend-Developer"],
    typeSpeed:150,
    loop:{}
  })
  useEffect(()=>{
    Aos.init({duartion:5000})
  })
  return (

    <div className='hero'>
      
      <div className="image" data-aos='zoom-in' data-aos-delay='500' data-aos-duration='2000'>
        <img src={image} alt="" />
      </div>
      <div className="content">
        <h2 data-aos='fade-right'>Hello,It's me</h2>
        <h1 data-aos='fade-left'>K.M.S.Manikanta</h1>
        <h2 data-aos='zoom-in' data-aos-duration='1000'>I am a <span className='text'>{text}</span><Cursor cursorColor='#fff'/></h2>
        <p data-aos='zoom-out'>I am Web developer with extensive experience over 2-years and expertised in creating website-design and Frontend Design and many more...</p>
        <div className="icons">
          <p data-aos='slide-right'> <a href="https://www.instagram.com/kms.manikanta_naidu/?next=%2F">        <IoLogoInstagram className='icon'/></a>
</p>
          <p data-aos='slide-right' data-aos-delay='500'>          <FaFacebook className='icon'/>
</p>
          <p data-aos='slide-right' data-aos-delay='1000'> 
          <a href="https://github.com/KMSMANIKANTA">         <BsGithub className='icon'/></a>
</p>
          <p data-aos='slide-right' data-aos-delay='1500'>          <TiSocialLinkedinCircular className='icon'/>
</p>
        </div>
      </div>
    
    </div>
  )
}

export default Hero
