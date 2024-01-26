// pages/ContactPage.js
import React from 'react';

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      {/* Contact form */}
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Contact information */}
      <div>
        <h2>Contact Information:</h2>
        <p>Email: tmbarnhart1@gmail</p>
        <p>Phone: 919-523-2178</p>
      </div>
    </div>
  );
}

export default ContactPage;
