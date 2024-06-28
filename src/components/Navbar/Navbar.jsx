import React, { useEffect, useState } from 'react'
import './Navbar.css';
import { HiBars3BottomRight } from "react-icons/hi2";
import { SiTruenas } from 'react-icons/si';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Navbar = () => {

  const [toggle,setToggle]=useState(false);
  const [scroll,setScroll]=useState(false)
 useEffect(()=>{
  Aos.init({
    duration:2000
  })
  window.addEventListener('scroll',()=>{
    window.scrollY>50?setScroll(true):setScroll(false)
  })
 })
  return (
    <div className={`navbar ${scroll?"activeNav":""}`} >
      <div className="logo" data-aos='zoom-in'>
        K.M.S.M
      </div>
      <div  className={`navlinks ${toggle?"active":" "}`}>
        <p data-aos='slide-right'>Home</p>
        <p data-aos='slide-right'>About Me</p>
        <p data-aos='slide-right'>Skills</p>
        <p data-aos='slide-right'>Projects</p>
        <p data-aos='slide-right'>Contact</p>
      </div>
      <HiBars3BottomRight  onClick={()=>{
        setToggle(!toggle)
      }}     className='toggle'  data-aos='slide-left'  />
    </div>
  )
}

export default Navbar
