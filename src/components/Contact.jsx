import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MyContext } from "../App";
import ScrollUp from "./ScrollUp";
import "./Contact.css";
function Contact() {
  const { contactRef } = useContext(MyContext);
  return (
    <>
      <figure class="pimg3">
        <div class="ptext">
          <span class="border">Contact</span>
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
          <form>
            <section className="form_box">
              <section className="info">
                <div className="name">
                  <input type="text" placeholder="Your Name" required />
                </div>

                <div className="email">
                  <input type="email" placeholder="Email" required />
                </div>

                <div className="phone">
                  <input type="phone" placeholder="Phone (optional)" />
                </div>
              </section>
              <section className="textarea">
                <textarea
                  name="textarea"
                  id=""
                  placeholder="Type your message..."
                ></textarea>
              </section>
            </section>
            <button id="submit">SEND MESSAGE</button>
          </form>
        </div>
        <ScrollUp />
      </section>
    </>
  );
}

export default Contact;
