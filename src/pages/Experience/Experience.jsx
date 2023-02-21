import React, { FC, useState } from "react";
import "../Experience/Style/Experience.css";
import { Card } from "../../components/Card/Card";

const experienceList = [
  {
    pargrah:
      "תואר ראשון בפסיכולוגיה אוניברסיטת רייכמן.<br /><br /> תואר שני בפסיכולוגיה אוניברסיטת רייכמן.<br /><br /> בנוסף לקליניקה הפרטית, מטפל שנה שלישית במתבגרים ומבוגרים בקליניקה הציבורית של אוניברסיטת רייכמן.\nשנתיים עבודה עם מתמודדי נפש בקיבוץ מגל במסגרת עמותת אנוש.",
  },
  {
    pargrah: `שנתיים מדריך כושר קרבי - הכנה מנטלית ופיזית של בני נוער לצבא.<br /><br />שנתיים מורה ליצירתיות לילדים ומתבגרים ומרצה בנושא למבוגרים.<br /><br />מרצה במכינת "אשנב" מכינה שפועלת למען שילוב מתמודדי נפש בקהילה.
    לאורך השנים עבדתי עם אוכלוסיות שונות ומגוונות שעזרו לי לרכוש ידע והבנה מעבר ללימודים האקדמיים.`,
  },
  {
    pargrah: `שנת התנדבות בבית חולים פסיכיאטרי "שלוותה" במחלקת מבוגרים.<br /><br />מקים שותף ומדריך בתכנית "דרך ההבנה"- מטרת התכנית היא מתן כלים פסיכולוגיים בסיסיים לנערים ונערות מתבגרים.ות באמצעות דמות מלווה בסגנון "אח גדול", כדי למנוע תסכולים אשר עולים בגיל ההתבגרות ועשויים להתפתח לבעיות מורכבות יותר בחייהם הבוגרים.
  `,
  },
];

export const Experience = () => {
  const displayExpirience = experienceList.map(({ pargrah }, index) => {
    return <Card key={pargrah} words={pargrah} index={index}></Card>;
  });
  return (
    <div className="experience-cover">
      <article className="experience-text-container">
        <h1>השכלה אקדמאית והכשרה</h1>
        <ul className="experience-list">{displayExpirience}</ul>
      </article>
    </div>
  );
};
