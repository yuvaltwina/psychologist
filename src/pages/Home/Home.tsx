import "../Home/Style/Home.css";
import React, { FC } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import profile from "../../utils/assets/profile.jpg";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-profile">
        <img src={profile} alt="פרופיל" className="home-profile-image"></img>
        <article className="home-profile-text">
          <h1>שחר ברורמן</h1>
          <h3>מתמחה בפסיכולוגיה קלינית</h3>
          <p>
            מטפל בגישה דינמית עם כלים מעולם ה CBT. אני מאמין כי לכל מטופל צריך
            להתאים את הגישה שמתאימה לו ולכן אני מקפיד על גמישות במהלך התהליך
            הטיפולי. מטפל במבוגרים ומתבגרים.<br></br> יש אפשרות גם לטיפול דרך
            ZOOM ,להתייעצות או קביעת מפגש ניתן ליצור קשר.
          </p>
        </article>
      </div>
    </div>
  );
};
