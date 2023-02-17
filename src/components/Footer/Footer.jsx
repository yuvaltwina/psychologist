import React, { FC } from "react";
import "./Footer.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { WHATSAPPLINK, FACEBOOKLINK } from "../../utils/data/constVariables";
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
