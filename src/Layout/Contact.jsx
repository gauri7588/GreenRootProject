import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <h2> Contact Us 🌿</h2>

      <div className="contact-container">

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>📍 Sinnar, Nashik, Maharashtra</p>
          <p>📞 +91 9876543210</p>
          <p>📧 greenroot@gmail.com</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>

      {/* Map */}
      <div className="map">
        <iframe
          src="https://www.google.com/maps?q=Sinnar%20Nashik&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          title="map"
        ></iframe>
      </div>

    </section>
  );
}

export default Contact;