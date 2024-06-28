import React, { useEffect } from 'react'
import './Skills.css'
import html from './tech/html.png'
import css from './tech/css.png'
import c from './tech/c.png'
import git from './tech/git.png'
import java from './tech/java.png'
import javascript from './tech/javascript.png'
import python from './tech/python.png'
import reactjs from './tech/reactjs.png'
import redux from './tech/redux.png'
import tailwind from './tech/tailwind.png'
import bootstrap from './tech/bootstrap.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Skills = () => {
  useEffect(()=>{
    Aos.init({
      duration:1000
    })
  })
  return (
    <>
    <p className='first'>My technical skills are as follows...</p>
    <div className='skills'>
      <div className="course" data-aos='fade-right'>
        <img src={html} alt="" />
        <p>HTML</p>
      </div>
      <div className="course" data-aos='fade-left'>
        <img src={css} alt="" />
        <p>CSS</p>
      </div>
      
      <div className="course" data-aos='fade-right'>
        <img src={javascript} alt="" />
        <p>JavaScript</p>
      </div>
      <div className="course" data-aos='fade-left'>
        <img src={bootstrap} alt="" />
        <p>Bootstrap</p>
      </div>
      <div className="course" data-aos='fade-right'>
        <img src={reactjs} alt="" />
        <p>React-Js</p>
      </div>
      <div className="course" data-aos='fade-left'>
        <img src={git} alt="" />
        <p>Git</p>
      </div>
      <div className="course" data-aos='fade-right'>
        <img src={tailwind} alt="" />
        <p>Tailwind</p>
      </div>
      <div className="course" data-aos='fade-left'>
        <img src={c} alt="" />
        <p>C</p>
      </div>
      <div className="course" data-aos='fade-right'>
        <img src={java} alt="" />
        <p>Java</p>
      </div>
      
      <div className="course" data-aos='fade-left'>
        <img src={python} alt="" />
        <p>Python</p>
      </div>
    </div>
    </>
  )
}

export default Skills
