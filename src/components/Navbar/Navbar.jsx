import React, { useEffect, useState } from 'react'
import './Navbar.css';
import { HiBars3BottomRight } from "react-icons/hi2";
import { SiTruenas } from 'react-icons/si';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-scroll';
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
        <Link to='hero' duration={2500}  offset={0} onClick={()=>{
          setToggle(false)
        }}>
        K.M.S.M
        </Link>
      </div>
      <div  className={`navlinks ${toggle?"active":" "}`}>
        <p data-aos='slide-right'><Link to='hero' duration={2500}  offset={0} onClick={()=>{
          setToggle(false)
        }}>
        Home
        </Link></p>
        <p data-aos='slide-right'><Link to='about' duration={2500}  offset={-200} onClick={()=>{
          setToggle(false)
        }}>
        About Me
        </Link></p>
        <p data-aos='slide-right'><Link to='skills' duration={2500}  offset={-200} onClick={()=>{
          setToggle(false)
        }}>
        Skills
        </Link></p>
        <p data-aos='slide-right'>Projects</p>
        <p data-aos='slide-right' ><Link to='contact' duration={2500} offset={-300} onClick={()=>{
          setToggle(false)
        }}>Contact Me</Link></p> 
      </div>
      <HiBars3BottomRight  onClick={()=>{
        setToggle(!toggle)
      }}     className='toggle'  data-aos='slide-left'  />
    </div>
  )
}

export default Navbar
