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
        <p className="first-text" data-aos='slide-up'>I am a skilled web developer with 2 years of experience  in the industry.My passion lies in creating captivating website designs and implementing them through frontend develpment.I take pride in staying up-to-date with current designs trends and leveraging my creativity to produce visually appealing and user-friendly websites.</p>
        <div className="line" data-aos='fade-left'>

        </div>
        <div className="personal" data-aos='zoom-in'>
          <pre>
            Name        :K.M.S.Manikanta <br />
            Nationality :Indian <br />
            Age         :18 years <br />
            Education   :B-tech 2nd Year <br />
            College     :RGUKT NUZVID <br />
          </pre>
        </div>
        <div className="line" data-aos='fade-right' ></div>
      </div>
    </div>
  )
}

export default About
