import React, { FC } from "react";
import { Routes, Route, Link } from "react-router-dom";
import sittingPeople from "../../utils/assets/sittingPeople.jpg";
import "../Treatment/Style/Treatment.css";
import road from "../../utils/assets/road.png";
export const Treatment = () => {
  return (
    <div className="Treatment">
      <div className="home-study">
        <img
          src={sittingPeople}
          alt="sitting people"
          className="home-study-image"
        ></img>
        <article className="home-study-text">
          <h1>מהו טיפול פסיכולוגי</h1>
          <p>
            מעצם היותנו בני אדם, אנחנו מתמודדים עם קשיים. לאורך השנים אנחנו
            מפתחים דרכי התמודדות שונות להתמודד עם קשיים אלו. חלקן מיטיבות וחלקן
            פוגעות בנו ואנחנו משלמים עליהן מחיר שאנחנו לא בהכרח מודעים אליו.
            <br></br> אדם פונה לטיפול, בדרך כלל, כאשר המחיר מתחיל להיות לו יקר.
            כלומר, הוא מרגיש מחיר זה במספר תחומים בחייו (מערכות יחסים, קריירה,
            בריאות....). בטיפול, בתור התחלה מתקיימות עצירה והתבוננות על החיים,
            עצירה זאת נהייתה זרה ונדירה בעולם המודרני האינטנסיבי והמהיר אך היא
            חשובה ואפקטיבית. דרך התבוננות, השיתוף, ההקשבה והחשיבה המשותפת מתהוות
            מודעות עצמית ודרך התמודדות מיטיבה יותר. <br></br> אני מאמין שכל אחד
            יכול להפיק מטיפול אך רובנו בוחרים להתחיל טיפול כאשר המחיר שאנחנו
            משלמים בחיינו על דרכי ההתמודדות שלנו נאגר ואנחנו מבינים באופן עמוק
            שהגיע הזמן לשינוי כלשהו. תחילת טיפול פסיכולוגי עשויה להיות הצעד
            הראשון בשינוי זה.
          </p>
        </article>
      </div>
    </div>
  );
};
