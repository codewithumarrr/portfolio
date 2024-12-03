import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"; // Import WhatsApp icon
import CustomHook from "./CustomHook";

function Contacts() {
  const [listContacts] = useState([
    {
      title: "WhatsApp",
      icon: faWhatsapp,
      value: "+923065351704",
      link: "https://wa.me/923065351704",
    },
    {
      title: "Email",
      icon: faEnvelope,
      value: "buildwithumar@gmail.com",
      link: "mailto:buildwithumar@gmail.com",
    },
    {
      title: "GitHub",
      icon: faGithub,
      value: "https://github.com/codewithumarrr",
      link: "https://github.com/codewithumarrr",
    },
    {
      title: "LinkedIn",
      icon: faLinkedin,
      value: "https://linkedin.com/in/umar95global",
      link: "https://linkedin.com/in/umar95global",
    },
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="contacts" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Get in Touch
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        I’m always open to discussing new projects, creative ideas, or
        opportunities to contribute to impactful solutions. Here’s how you can
        reach me:
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((contact, key) => (
          <div className="item" key={key}>
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FontAwesomeIcon icon={contact.icon} className="contact-icon" />
              <div className="contact-details">
                <h3>{contact.title}</h3>
                <div>{contact.value}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contacts;
