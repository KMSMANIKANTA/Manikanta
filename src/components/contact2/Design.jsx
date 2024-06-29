import React from 'react'
import "./Design.css"
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const Design = () => {
  return (

      <div className="main">
  <div className="up">
    <button className="card1">
      <a href="https://www.instagram.com/kms.manikanta_naidu/?next=%2F">
      <FaInstagram className='instagram icon'/>
      </a>
    </button>
    <button className="card2">
      <a href="#">
      <CiTwitter className='twitter icon'/>
      </a>
      </button>
  </div>
  <div className="down">
    <button className="card3">
      <a href="https://github.com/KMSMANIKANTA">
      <FiGithub className='github icon'/>
      </a>
    </button>
    <button className="card4">
      <a href="#">
     <FaFacebookF className='facebook icon'/>
     </a>
    </button>
  </div>
</div>
)
}

export default Design
