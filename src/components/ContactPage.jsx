import React from 'react';

const ContactPage = () => {
  return (
    <div style={{ backgroundColor: "#f0f0f0", color: "#ffffff", padding: "20px" }}>
      {/* Contact heading */}
      <h1>Contact Me</h1>
      {/* Contact form */}
      <form>
        {/* Name input */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name" style={{ marginRight: "10px" }}>Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        {/* Email input */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ marginRight: "10px" }}>Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        {/* Message input */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="message" style={{ marginRight: "10px" }}>Message:</label>
          <textarea id="message" name="message" rows="4" />
        </div>
        {/* Submit button */}
        <button type="submit" style={{ backgroundColor: "#333333", color: "#ffffff", padding: "10px 20px", border: "none", borderRadius: "5px" }}>Submit</button>
      </form>

      {/* Contact information */}
      <div style={{ marginTop: "20px" }}>
        <h2>Contact Information:</h2>
        <p>Email: tmbarnhart1@gmail</p>
        <p>Phone: 919-523-2178</p>
      </div>
    </div>
  );
}

export default ContactPage;
