import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Heading from './components/Heading/Heading'
import Skills from './components/Skills/Skills'
import Contact from './components/contact/Contact'

const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Heading heading={"About Me"}/>
      <About/>
      <Heading heading={"My Skills"}/>
      <Skills/>
      <Heading heading={"Contact Me"}  />
      
      <Contact/>
      <br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />
     </div>

  )
}

export default App
