import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        'service_u52f7fa',
        'template_omjga96',
        form.current,
        'xue9tiG-uFLfNO4tG'
      )
      .then((result) => {
        console.log(result.text);
        console.log("Successfully Sent");
        e.target.reset();
        // Display a success alert
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.log(error.text);
        // Display an error alert
        alert("An error occurred. Please try again later.");
      });
  };

 
  

  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2 className="contact-h2">Contact Me</h2>
      </div>
      <form ref={form} className="contact--form--container" onSubmit={sendEmail}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="user_first_name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="user_last_name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="user_email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone_no"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md message"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <div>
          <button value="Send" className="btn btn-primary contact--form--btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
