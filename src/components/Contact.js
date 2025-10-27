import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [submissions, setSubmissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const meetingTime = e.target.meetingTime.value;
    const clientEmail = e.target.clientEmail.value;

    const newEntry = { name, email, message, meetingTime, clientEmail };
    setSubmissions([newEntry, ...submissions]);

    emailjs.init("V3AITNwZxKq3E8n5v"); // your public key
    emailjs
      .send("service_jet8hzu", "template_e5eubka", {
        from_name: name,
        from_email: email,
        message: message,
        meeting_time: meetingTime,
        client_email: clientEmail,
      })
      .then(
        () => alert("✅ Meeting request email sent successfully!"),
        (err) => console.error("❌ Email failed:", err)
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Schedule an Online Meeting</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <input type="datetime-local" name="meetingTime" required />
        <input type="email" name="clientEmail" placeholder="Client's Email" required />
        <button type="submit">Schedule Meeting</button>
      </form>

      <div id="output">
        <h3>All Submissions:</h3>
        {submissions.map((entry, index) => (
          <div className="entry" key={index}>
            <strong>Entry {submissions.length - index}</strong><br />
            <strong>Name:</strong> {entry.name}<br />
            <strong>Email:</strong> {entry.email}<br />
            <strong>Message:</strong> {entry.message}<br />
            <strong>Meeting Time:</strong> {entry.meetingTime}<br />
            <strong>Client Email:</strong> {entry.clientEmail}
          </div>
        ))}
      </div>

      <p style={{ textAlign: "center", marginTop: "10px" }}>
        Connect with me:{" "}
        <a href="https://linkedin.com/in/Surya_1701" target="_blank" rel="noreferrer" style={{ color: "#00adb5" }}>
          LinkedIn
        </a>{" "}
        |{" "}
        <a href="https://instagram.com/Surya_R_2001" target="_blank" rel="noreferrer" style={{ color: "#00adb5" }}>
          Instagram
        </a>
      </p>
    </section>
  );
};

export default Contact;
