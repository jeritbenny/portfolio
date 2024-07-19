import React, { useState } from 'react'
import'./Contact.css'
import emailjs from '@emailjs/browser'

function Contact() {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[message,setMessage]=useState('')

  const handleSubmit= (e) =>{
    e.preventDefault()

    const serviceId="service_2mcn9az";
    const templateId="template_7mcme1m";
    const publicKey="8cKxuD2YNbyJ2_O-L";

    const templateParams={
      from_name: name,
      from_email: email,
      to_name:"jerit",
      message: message
    }
    //sending msg
    emailjs.send(serviceId,templateId,templateParams,publicKey)
    .then((response)=>{
      alert("email sended")
      setMessage('');
      setName('');
      setEmail('');
    })
    .catch((error)=>{
      console.log("error ",error);
    })
  }
  return (
    <div className='contact'>
      <h1 className='con-head'>Contact</h1>
      <div className='con-main'>
      <div className='contact-div'>
         
         <div className='details'>
         <p><i class="fa-solid fa-phone"></i> 9061850677</p>
         </div>
         <div className='details'>
        <p> <i class="fa-solid fa-envelope"></i> jeritbenny.jbk@gmail.com</p>
         </div>
         <div className='details'>
        <p> <i class="fa-solid fa-location-dot"></i> Naduvil, Kannur, Kerala</p> 
         </div>
      </div>
      <div className='contact-div1'>
        <form onSubmit={handleSubmit}>
      <div className='input-group'>
        <input type='text' required value={name}
        onChange={(e)=>setName(e.target.value)}/>
        <label>Your Name</label>
      </div>
      <div className='input-group'>
        <input type='email' required
         value={email}
         onChange={(e)=>setEmail(e.target.value)}/>
        <label>Your Email</label>
      </div>
      <div className='input-group'>
        <textarea className='con-area' placeholder='Message'
         value={message}
         onChange={(e)=>setMessage(e.target.value)}></textarea>
      </div>
      <div>
        <button className='btn'>Sent<i class="fa-solid fa-paper-plane"></i></button>
      </div>
      </form>
      </div>
      </div>

    </div>
  )
}

export default Contact