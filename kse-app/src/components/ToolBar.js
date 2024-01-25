import React, { useState, useRef, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";



const ToolBar = () => {

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  const [contactClicked, setContactClicked] = useState(false);
  const popupRef = useRef(null);

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
    // create textarea 元素
    const textarea = document.createElement("textarea");
    textarea.value = text;

    // 将 textarea 元素添加到页面
    document.body.appendChild(textarea);

    // 选中 textarea 中的文本
    textarea.select();
    textarea.setSelectionRange(0, 99999); // 兼容移动端

    // 将选中的文本复制到剪贴板
    document.execCommand("copy");

    // 移除临时的 textarea 元素
    document.body.removeChild(textarea);
  };

  return (
    <>
      <div className="media_icon">
        <a className="logo"> <FaXTwitter className="react_icon" /></a>
        <a className="logo"> <FaFacebook className="react_icon" /></a>
        <a className="logo"> <IoLogoWechat className="react_icon" /></a>
      </div>

      <div></div>

      <div className={`contact_button ${buttonClicked ? "clicked" : ""}`}>
        <button className="contact" onClick={isContactOpen ? closeContact : openContact}> 
        {contactClicked ? <MdKeyboardArrowRight className="contact_off"/> : <MdKeyboardArrowLeft className="contact_on"/> }
        </button>

        {isContactOpen && (
          <div className="contact_box" ref={popupRef}>
            <span className="close" onClick={closeContact}></span>
            <div className="phone_box" title="Click to copy" onClick={() => handelCopy("+86 13XXXXXXXXX")}>
              <div className="p1">
                Phone:
              </div>
              <div className="p2">
                +86 12345678900
              </div>
            </div>
            <div className="email_box" title="Click to copy" onClick={() => handelCopy("XXXXXXXX@gmail.com")}>
              <div className="p1">
                Email:
              </div>
              <div className="p2">
                123456789@gmail.com
              </div>
            </div>
          </div>
        )}
      </div>

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
    </>
  )
}

export default ToolBar;