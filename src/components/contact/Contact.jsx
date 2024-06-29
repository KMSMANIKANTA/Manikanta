import React, { useEffect } from 'react'
import './Contact.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Design from '../contact2/Design'
const Contact = () => {

  const [result, setResult] = React.useState("");
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a025d6c6-cd21-45ec-8810-4e3f2c196366");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact' data-aos='zoom-in'>
      <Design/>
      <form className='form' onSubmit={onSubmit}>
        <input type="text" name='name' placeholder='Enter your name'  required/>
        <input type="text" name='mobilenum' placeholder='Enter your mobile' required />
        <input type="email" name='email' placeholder='Enter your email' required />
        <textarea name="messagel" placeholder='Enter message' rows='6' required></textarea>
        <button type='submit' >Submit</button>
        <span className='status'>{result}</span>
      </form>
    </div>
  )
}

export default Contact
