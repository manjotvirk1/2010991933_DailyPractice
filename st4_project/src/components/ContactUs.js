import React, { useState } from "react";
import '../styles/ContactUs.css';
const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="outerDiv">
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </div>
    );
  }

  return (
    <div className="container outerDiv">
        <h2>Feedback Form</h2>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="innerDiv">
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div className="innerDiv">
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div className="innerDiv">
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div className="innerDiv">
        <button type="submit"> Send a message </button>
      </div>
    </form>
    </div>
  );
};

export default ContactUs;