"use client"

import React, { useState } from 'react';
import './style.css'; // Assume CSS styles are in this file

const ContactUs = () => {

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    message: ""

  })


  const [status, setStatus] = useState("")


  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    })

  }





  const handleSubmit=async(e)=>{




e.preventDefault();

 console.log(formData)

try {
  

 const  response = await fetch(`${process.env.API}/contact`, { 



  method: 'POST',


   headers:{     


    'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })


 const  result=await response.json()


  if (result.msg) {

setStatus("message sent successfully")

setFormData(

  {

    name: "",
    email: "",
    message: ""

  }

)
}else {

setStatus("something went wrong please try again")

}


} catch (error) {
   console.log(error)
   setStatus("error sending message")
}





  }





  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you. Send us a message, and we’ll respond as soon as possible.</p>
      <form
    onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>


        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default ContactUs;
