import React, { useRef, useState } from "react";



const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5vf2k8c",
        "template_bgii4vk",
        form.current,
        "J_cW9EkUMC4v0ZZ8H"
      )
      .then(
        (result) => {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setPhone("");
          setTimeout(() => {
            success("Email Sent , I will get back to you soon", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }, 1000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact ml-20" id="contact">
      <div className="contact-form">
        <h1 className="font-bold text-cyan-300 text-2xl mb-10">Contact Form</h1>
        <form ref={form} onSubmit={sendEmail} y>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
          />
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            required
          />
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter Your Subject"
            required
          />
          <textarea
            id=""
            cols="40"
            rows="10"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button className="bg-green-500 px-5 py-2 rounded-md hover:scale-105 active:scale-100">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
