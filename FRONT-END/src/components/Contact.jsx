import React from 'react'
import '../styles/Contact.css'
const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact_header">
            <div className=" data phone">
            <h6>Phone</h6>
            <p><small>+91 123123123</small></p>
            </div>
            <div className=" data email">
            <h6>Email</h6>
            <p><small>aman@gmail.com</small></p>
            </div>
            <div className=" data address">
            <h6>Address</h6>
            <p><small>Mumbai, India</small></p>
            </div>
            </div>
            <div className="contact_main">
            <div className="contact_heading">
            <h2>Get in Touch</h2>
            </div>
            <div className="contact_inputs">
            <input type="text" placeholder='Your name'/>
            <input type="text" placeholder='Your email'/>
            <input type="text" placeholder='Your phone'/>
            
            </div>
            <input className='messageArea' type="textarea" placeholder='Message'/>
            <button type="button" class="btn btn-primary sendMessageBtn">Send Message</button>
            </div>
        </div>
    )
}

export default Contact;
