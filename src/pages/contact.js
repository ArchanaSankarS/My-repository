import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="contact-page">
      
      <div className={`contact-card ${isAdmin ? 'owner-view' : ''}`}>

        <div className="toggle-container">
          <button
            onClick={() => setIsAdmin(false)}
            className={!isAdmin ? "toggle-btn active" : "toggle-btn"}
          >
          MESSAGE US
          </button>

          <button
            onClick={() => setIsAdmin(true)}
            className={isAdmin ? "toggle-btn active" : "toggle-btn"}
          >
            CONTACT US
          </button>
        </div>

        <hr style={{ border: '0.2px solid  #083e77', margin: '15px 0' }} />

        {!isAdmin ? (
         
          <div className="form-section">
            <h2>Message Us                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </h2>
            <form className="contact-form">
              <div className="form-group">
                <label>Name:</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Message:</label>
                <textarea placeholder="Write your message here..."></textarea>
              </div>
              <button type="submit" className="send-btn">Send Message</button>
            </form>
          </div>
        ) : (
         
          <div className="owner-full-page">
            <div className="owner-info-grid">
              <div className="info-box">
 <div className="contact-help">
  <p> <strong>Contact Us For Help</strong></p></div>
       
 <div className="address-section">
    <h4 className="address-heading">ADDRESS</h4>
    <p className="address-text"> KCDC Office Campus<br></br>
6th Floor, Near IOB Bank, Kuthukalvalasai,< br></br>
Tenkasi (formerly Tirunelveli), - 627811

,<br></br>
Tamil Nadu, India.   </p>
  </div>

  <div className="details-grid">
    <div className="detail-item">
      <strong>Official Email</strong>
      <p>statejobportaltn@gmail.com</p>
    </div>
    <div className="detail-item">
      <strong>Sales Email</strong>
      <p>as@jobportal.in</p>
    </div>
    <div className="detail-item">
      <strong>Support Email</strong>
      <p>as@tn.gov.in</p>
    </div>
    <div className="detail-item">
      <strong>Office Phone</strong>
      <p>+91 321 27025949</p>
    </div>
    <div className="detail-item">
      <strong>WhatsApp</strong>
      <p>7451284541</p>
    </div>
    <div className="detail-item">
      <strong>Support Phone</strong>
      <p>9632578165</p>
    </div>
  </div>
</div>
<div className="map-section">
                <h3>Find Us on Map</h3>
                
<iframe
  title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.838545829636!2d77.3094!3d8.9592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTcnMzMuMSJOIDc3wrAxOCczMy44IkU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
  width="100%"
  height="300"
  style={{ border: 0, borderRadius: '15px' }}
  allowFullScreen=""
  loading="lazy">
</iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;