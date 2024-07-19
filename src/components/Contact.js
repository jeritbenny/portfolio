import React from 'react'
import'./Contact.css'

function Contact() {
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
      <div className='input-group'>
        <input type='text' required/>
        <label>Your Name</label>
      </div>
      <div className='input-group'>
        <input type='email' required/>
        <label>Your Email</label>
      </div>
      <div className='input-group'>
        <textarea className='con-area' placeholder='Message'></textarea>
      </div>
      <div>
        <button className='btn'>Sent<i class="fa-solid fa-paper-plane"></i></button>
      </div>
      </div>
      </div>

    </div>
  )
}

export default Contact