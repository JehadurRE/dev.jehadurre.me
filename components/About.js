"use client"

import { useState } from "react";
import { FaClipboard } from "react-icons/fa";
import DynamicAge from "./DynamicAge";

// Component for copying an email to clipboard with a clipboard icon
const EmailCopy = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0 0px",
        display: "inline",
        alignItems: "center",
      }}
      aria-label={`Copy ${email} to clipboard`}
    >
      <FaClipboard  height={12} />
      {copied && (
        <span style={{ display:"inline",color: "green", marginLeft: "4px", fontSize: "0.9em" }}>
          Copied!
        </span>
      )}
    </button>
  );
};

const About = () => {
  return (
    <div className="section about section_" id="section-resume">
      <div className="content">
        <div className="title">
          <div className="title_inner">About Me</div>
        </div>
        <div className="image">
          <img src="images/icon.png" alt="Profile Icon" />
        </div>
        <div className="desc">
          <p style={{ textAlign: "justify" }}>
            Welcome to my portfolio! I am <strong>JehadurRE</strong>, a
            dedicated <strong>Software Engineer</strong> with a strong
            foundation in{" "}
            <em>
              full-stack development, mobile applications, AI/ML, and research
            </em>
            . I specialize in crafting{" "}
            <strong>
              efficient, scalable, and high-performance digital solutions
            </strong>{" "}
            using{" "}
            <span style={{ color: "#007bff", fontWeight: "bold" }}>Next.js</span>
            ,{" "}
            <span style={{ color: "#28a745", fontWeight: "bold" }}>
              Laravel
            </span>
            ,{" "}
            <span style={{ color: "#dc3545", fontWeight: "bold" }}>
              ASP.NET Core
            </span>
            ,{" "}
            <span style={{ color: "#ff5722", fontWeight: "bold" }}>Flutter</span>,
            and various backend technologies.
          </p>

          <div className="info-list">
            <ul>
              <li>
                <strong>Name:</strong> Jehadur Rahman (Emran)
              </li>
              <li>
                <strong>Age:</strong>{" "}
                <DynamicAge birthDate="1999-05-22" />
              </li>
              <li>
                <strong>Blood Group:</strong> O+
              </li>
              <li>
                <strong>Citizenship:</strong> Bangladesh
              </li>
              <li>
                <strong>Residence:</strong> Dhaka
              </li>
              <li>
                <strong>E-mail:</strong>{" "}
                <span style={{ display:"inline" }}>
                  contact@jehadurre.me
                </span>
                <EmailCopy style={{ display:"inline" }} email="emran.jehadur@gmail.com" />
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="#" className="btn fill" data-text="Download CV">
              Download CV
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default About;
