import React, { useState, useRef, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Success from "./Success.jsx";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "../App";
import ScrollUp from "./ScrollUp";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [contactInput, setContactInput] = useState({
    sender_name: "",
    sender_email: "",
    sender_phone: "",
    message: "",
  });
  const { contactRef } = useContext(MyContext);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_e5yrlbp", "template_rpnf4sr", formRef.current, {
        publicKey: "qWWruJDl-QWzSjQrV",
      })
      .then(
        () => {
          setError(false);
          setSuccess(true);
          setContactInput({
            sender_name: "",
            sender_email: "",
            sender_phone: "",
            message: "",
          });
        },
        (error) => {
          setError(true);
          setSuccess(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <>
      <figure className="pimg3">
        <div className="ptext">
          <span className="border">Contact</span>
        </div>
      </figure>
      <section ref={contactRef} className="contact_container">
        <div className="contact_header">
          <h1>Get in touch</h1>
          <p>
            <FontAwesomeIcon icon={faPhone} /> : +44 7466072016
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> : quadrimotayo@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> Manchester UK
          </p>
        </div>

        <div className="contact_form">
          <form ref={formRef} onSubmit={sendEmail}>
            <section className="form_box">
              <section className="info">
                <div className="name">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    name="sender_name"
                    value={contactInput.sender_name}
                    onChange={(e) =>
                      setContactInput({
                        ...contactInput,
                        sender_name: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="email">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="sender_email"
                    value={contactInput.sender_email}
                    onChange={(e) =>
                      setContactInput({
                        ...contactInput,
                        sender_email: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="phone">
                  <input
                    type="tel"
                    placeholder="Phone (optional)"
                    name="sender_phone"
                    value={contactInput.sender_phone}
                    onChange={(e) =>
                      setContactInput({
                        ...contactInput,
                        sender_phone: e.target.value,
                      })
                    }
                  />
                </div>
              </section>
              <section className="textarea">
                <textarea
                  name="message"
                  id=""
                  placeholder="Type your message..."
                  value={contactInput.message}
                  onChange={(e) =>
                    setContactInput({
                      ...contactInput,
                      message: e.target.value,
                    })
                  }
                ></textarea>
              </section>
            </section>
            <button id="submit">SEND MESSAGE</button>
            {<Success success={success} />}
          </form>
        </div>

        <ScrollUp />
      </section>
    </>
  );
}

export default Contact;
