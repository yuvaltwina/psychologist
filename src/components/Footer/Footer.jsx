import React, { FC } from "react";
import "./Footer.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
const WHATSAPPLINK = "https://api.whatsapp.com/send?phone=0546381184";
const FACEBOOKLINK =
  "https://www.facebook.com/people/%D7%A9%D7%97%D7%A8-%D7%91%D7%A8%D7%95%D7%A8%D7%9E%D7%9F-%D7%A4%D7%A1%D7%99%D7%9B%D7%95%D7%9C%D7%95%D7%92/100076628571761/";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contact-icons">
        <a
          href={FACEBOOKLINK}
          target="_blank"
          className="footer-contact-icon-container"
        >
          <FaFacebook className="footer-facebook-icon" />
        </a>
        <a
          href={WHATSAPPLINK}
          target="_blank"
          className="footer-contact-icon-container"
        >
          <AiOutlineWhatsApp className="footer-whatsapp-icon" />
        </a>
      </div>
      <p className="footer-liecence-phone"> 27-164144 מס' רשיון</p>
      <div className="footer-loc-and-number">
        <div className="footer-number-container">
          <BsTelephone className="footer-numicon" />
          <h2 className="footer-text">054-638-1184</h2>
        </div>
        <span className="footer-middle-line">|</span>
        <div className="footer-loc-container">
          <span className="footer-text">הנוטר 4 תל אביב</span>
          <GoLocation className="footer-locIcon" />
        </div>
      </div>
      <p className="footer-liecence-computer"> 27-164144 מס' רשיון</p>
    </div>
  );
};
