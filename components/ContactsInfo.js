"use client"; // ✅ Ensure it's a Client Component

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // ✅ Correct import

const ContactsInfo = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false); // ✅ Track success message
  const [errorMessage, setErrorMessage] = useState(""); // ✅ Track error message

  // Function to format the date as "25 Nov 1999"
  const getFormattedDate = () => {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const date = new Date();
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setSuccess(false); // Reset success message
    setErrorMessage(""); // Reset error message

    const formData = new FormData(form.current);
    const fromEmail = formData.get("from_email"); // ✅ Get sender email

    // Prepare email data manually (instead of relying on hidden inputs)
    const emailParams = {
      date: getFormattedDate(),
      from_name: formData.get("from_name"),
      from_email: fromEmail,
      to_name: "JehadurRE",
      message: formData.get("message"),
      reply_to: fromEmail, // ✅ Explicitly setting reply_to
    };

    try {
      const response = await emailjs.send(
        "service_710izq3",
        "jehadurre_cyarm",
        emailParams,
        "L3euloaFoWfcYKCN2"
      );

      console.log("SUCCESS!", response);
      setSuccess(true); // ✅ Show success message **before resetting the form**
      setTimeout(() => setSuccess(false), 5000); // ✅ Hide after 5 seconds

      setTimeout(() => {
        if (form.current) form.current.reset(); // ✅ Clear form **after** success message
      }, 200); 
      
    } catch (error) {
      console.log("FAILED...", error.text);
      setErrorMessage("Failed to send message. Please try again later."); // ✅ Show error message
    }
  };

  return (
    <div className="section contacts section_" id="section-contacts">
      <div className="content">
        <div className="title">
          <div className="title_inner">Contacts</div>
        </div>
        <div className="service-items">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-android-phone-portrait" />
            </div>
            <div className="name">Phone</div>
            <p>+ (880) 1788242956</p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-email" />
            </div>
            <div className="name">Email</div>
            <p>
              <a href="mailto:emran.jehadur@gmail.com">
                emran.jehadur@gmail.com
              </a>
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-ios-location" />
            </div>
            <div className="name">Address</div>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="contact_form">
          <form ref={form} onSubmit={sendEmail}>
            {/* Name field (from_name) */}
            <div className="group-val">
              <input type="text" name="from_name" placeholder="Your Name" required />
            </div>

            {/* Email field (from_email) */}
            <div className="group-val">
              <input type="email" name="from_email" placeholder="Your Email" required />
            </div>

            {/* Message field */}
            <div className="group-val ct-gr">
              <textarea name="message" placeholder="Message" required />
            </div>

            <button type="submit" className="btn fill" data-text="Send Message">
              Send Message
            </button>
          </form>

          {/* Success Message */}
          {success && (
            <div className="alert alert-s">
              <p>
                ✅ Thanks, your message has been sent successfully. We will contact you shortly!
              </p>
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="alert alert-error">
              <p>❌ {errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactsInfo;
