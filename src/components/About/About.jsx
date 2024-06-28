import React, { useEffect } from 'react'
import image from './mine2.jpg'
import './About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const About = () => {
  useEffect(()=>{
    Aos.init({
      duration:3000
    })
  })
  return (
    <div className='about'>
      <div className="left" data-aos='zoom-in'>
        <img src={image} alt="" />
      </div>
      <div className="right" >
        <p className="first-text" data-aos='fade-left'>I am a skilled web developer with 2 years of experience  in the industry.My passion lies in creating captivating website designs and implementing them through frontend develpment.I take pride in staying up-to-date with current designs trends and leveraging my creativity to produce visually appealing and user-friendly websites.</p>
        <div className="line" data-aos='slide-left'>

        </div>
        <div className="personal" data-aos='fade-left'>
          <pre>
            <span className="question">Name</span>        :Kanakala Mohan Surya Manikanta <br />
            <span className="question">Nationality</span> :Indian <br />

            <span className="question">Age</span>         :18years <br />
            <span className="question">Education</span>   :B-tech 1st year <br />
            <span className="question">Email</span>       :kanakalamanikanta2006@gmail.com <br />
            <span className="question">College</span>     :RGUKT IIIT NUZVID
            <br />
            <br />
            <br />
          </pre>
          
        </div>
      </div>
    </div>
  )
}

export default About
