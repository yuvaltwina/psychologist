import "../Lecture/Style/Lecture.css";
import React, { FC } from "react";
import road from "../../utils/assets/road.png";

export const Lecture = () => {
  return (
    <div className="lecture">
      <div className="lecture-container">
        <img src={road} alt="road" className="lecture-image"></img>
        <article className="lecture-text">
          <h1>הרצאות</h1>
          <h5>
            אורך כל הרצאה הוא בין שעה לשעה ורבע , ההרצאות הן אינטראקטיביות, הקהל
            משתתף
          </h5>

          <p>
            <span className="lecture-text-bold">מעגלי תקיעות - </span> קשיים
            שחווינו בגילאים מוקדמים דרשו מאיתנו ליצור דרכי התמודדות שמטרתם למנוע
            שקשיים אלו יחזרו על עצמם. בהרצאה זאת נלמד על דרכי התמודדות השכיחות
            שאנחנו פועלים בהם, על רגשות ומעגלי חשיבה והתנהגות שתוקעים אותנו
            במקום ועל דרכים שעשויות לעזור לצאת ממעגלים אלו.
          </p>
          <p>
            <span className="lecture-text-bold"> יצירתיות - </span>רבים סבורים
            שיצירתיות היא מיומנות שקיימת בקבוצת אנשים מסוימת שנולדה עם כישרון
            זה. האם יצירתיות קיימת אצל כולנו? האם היא מולדת או נרכשת? והאם היא
            חשובה או פשוט נחמד שיש אותה? בהרצאה זאת נלמד על מאפייני היצירתיות,
            נתנסה בהם ונראה איך ניתן להשתמש ביצירתיות לטובתנו בתחומים וסיטואציות
            רבים בחיינו.
          </p>
        </article>
      </div>
    </div>
  );
};
