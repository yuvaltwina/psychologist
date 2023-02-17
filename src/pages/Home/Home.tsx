import "../Home/Style/Home.css";

import React, { FC } from "react";

import { Navbar } from "../../components/Navbar/Navbar";
import profile from "../../utils/assets/profile.jpg";
import { WHATSAPPLINK, FACEBOOKLINK } from "../../utils/data/constVariables";

import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

export const Home = ({ refList }) => {
  const CONTACTREF = refList.contact;
  return (
    <div className="home">
      <div className="home-profile">
        <img src={profile} alt="פרופיל" className="home-profile-image"></img>
        <article className="home-profile-text">
          <div className="title-section">
            <h1>
              <span className="colored-title">פסיכולוג </span>
              שחר ברורמן
            </h1>
            <h3>מתמחה בפסיכולוגיה קלינית</h3>
          </div>
          <div className="paragraph-section">
            <p>
              מטפל בגישה דינמית עם כלים מעולם ה CBT. אני מאמין כי לכל מטופל צריך
              להתאים את הגישה שמתאימה לו ולכן אני מקפיד על גמישות במהלך התהליך
              הטיפולי. מטפל במבוגרים ומתבגרים.<br></br> יש אפשרות גם לטיפול דרך
              ZOOM ,להתייעצות או קביעת מפגש ניתן ליצור קשר.
            </p>
            <button
              className="contact"
              onClick={() => {
                CONTACTREF.current.scrollIntoView();
              }}
            >
              צור קשר
            </button>
            <div className="home-contact-icons">
              <a
                href={FACEBOOKLINK}
                target="_blank"
                className="home-contact-icon-container"
              >
                <FaFacebook className="home-facebook-icon" />
              </a>
              <a
                href={WHATSAPPLINK}
                target="_blank"
                className="home-contact-icon-container"
              >
                <AiOutlineWhatsApp className="home-whatsapp-icon" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
