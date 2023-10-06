import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import "./Contact.css"
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [messge,setMessage] = useState("");
  const [loading,setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    if(name === "" || email === "" || messge === ""){
      toast.error("fille the form correctly")
      setLoading(false)
      return;
    }
    console.log(form.current);
    emailjs.sendForm(
      'service_rxq1zxz',
      'template_slwnvqc',
       form.current,
      '0HYulHdaD1mh-5g13')
      .then((result) => {
          if(result.text === "OK"){
            console.log("message sent");
            setName("")
            setEmail("")
            setMessage("")
            setLoading(false)
            toast.success("mail sent")
          }
      }, (error) => {
        toast.error("failed to send")
          console.log(error.text);
      });
  };

  return (
    <div id='Contact' className='Section'>
      <div className='contact-left-shadow'><span className='contact-me'>Contact</span></div>
      <div className='contact-content'>
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
          <input name="user_name" onChange={(e)=>{setName(e.target.value)}} value={name} type='text' className='contact-full-name' placeholder='Full Name'/>
          <input name="user_email" onChange={(e)=>{setEmail(e.target.value)}} value={email} type='email' className='contact-email' placeholder='E-mail'/>
          <textarea name="message" onChange={(e)=>{setMessage(e.target.value)}} value={messge} type='text' className='contact-message' placeholder='Message'></textarea>
          <input type='submit' className='contact-submit' value={loading?"Loading..":"Contact"} disabled={loading }/>
        </form>
        <img alt='contact' src={require('../../Asserts/contact.png')} className='contact-image'/>
      </div>
      <Toaster/>
    </div>
  )
}

export default Contact
