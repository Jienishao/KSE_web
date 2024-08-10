import React, { useState, useRef, useEffect } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { MdPhone, MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
/* import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"; */
import "../css/ToolBar.css"
import { Link, useLocation } from "react-router-dom";
import whatsappQR from '../image/whatsapp.png';
import wechatQR from '../image/wechat.png';

const ToolBar = () => {

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  const [contactClicked, setContactClicked] = useState(false);
  const popupRef = useRef(null);
  const location = useLocation();
  const isRequestPage = location.pathname === '/Request';

  const openPopup = (event) => {
    event.stopPropagation();
    setPopupOpen(true);
    setButtonClicked(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setButtonClicked(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };

  const openContact = (event) => {
    event.stopPropagation();
    setContactOpen(true);
    setContactClicked(true);
  };

  const closeContact = () => {
    setContactOpen(false);
    setContactClicked(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handelCopy = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;

    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(textarea);
  };

  return (
    <>
      <div className="media_icon">
        <a href="https://www.linkedin.com" className="logo"> <FaLinkedin className="react_icon" /></a>
        <a href="https://www.facebook.com" className="logo"> <FaFacebook className="react_icon" /></a>
        <div className="logo">
          <IoLogoWechat className="react_icon" />
          <div className="logo_wechat">
          <img className="img_wechat" src={wechatQR} alt="Wechat Logo" />
          </div>
        </div>
        <div className="logo">
          <IoLogoWhatsapp className="react_icon" />
          <div className="logo_whatsapp">
          <img className="img_whatsapp" src={whatsappQR} alt="WhatsApp Logo" />
          </div>
        </div>
      </div>


      <div></div>

      <div className="contact">
        <div className="phone_box" title="Click to copy" onClick={() => handelCopy("+86 13XXXXXXXXX")}>
          <div className="p1">
            <MdPhone />
          </div>
          <div className="p2">
            +86 12345678900
          </div>
        </div>
        <div className="email_box" title="Click to copy" onClick={() => handelCopy("XXXXXXXX@gmail.com")}>
          <div className="p1">
            <MdEmail />
          </div>
          <div className="p2">
            123456789@gmail.com
          </div>
        </div>
      </div>

      <div></div>

      <div className={`language_button ${buttonClicked ? "clicked" : ""}`}>
        <button className="language" onClick={openPopup}>Language</button>

        {isPopupOpen && (
          <div className="popup" ref={popupRef}>
            <span className="close" onClick={closePopup}></span>
            <div className="language_box">
              <p>CHINESE</p>
            </div>
            <div className="language_box">
              <p>ENGLISH</p>
            </div>
            <div className="language_box">
              <p>GERMAN</p>
            </div>
            <div className="language_box">
              <p>FRENCH</p>
            </div>
          </div>
        )}
      </div>

      <div className="request">
        <Link to="/request" className="req_link">
          <button className={`request_button ${isRequestPage ? 'request_button_selected' : ''}`}>Request</button>
        </Link>
      </div>
    </>
  )
}

export default ToolBar;