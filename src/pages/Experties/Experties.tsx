import "../Experties/Style/Experties.css";
import React, { FC } from "react";
import anxiety from "../../utils/assets/anxiety.jpg";
import crisis from "../../utils/assets/crisis.jpg";
import decitionsmaking from "../../utils/assets/decitionsmaking.jpg";
import depression from "../../utils/assets/depression.jpg";
import loneliness from "../../utils/assets/loneliness.jpg";
import relationships from "../../utils/assets/relationships.jpg";

const imagesList = [
  { image: anxiety, title: "חרדה" },
  { image: crisis, title: "מצבי משבר" },
  { image: decitionsmaking, title: "קושי בקבלת החלטות" },
  { image: depression, title: "דיכאון" },
  { image: relationships, title: "מערכות יחסים" },
  { image: loneliness, title: "בדידות" },
];

export const Experties = () => {
  const displayImages = imagesList.map(({ image, title }) => {
    return (
      <div key={title} className="expertie">
        <img src={image} alt={title} className="expertie-image"></img>
        <h6>{title}</h6>
      </div>
    );
  });

  return (
    <div className="experties">
      <h1 className="exprties-headline"> תחומי טיפול</h1>
      <div className="experties-container">{displayImages}</div>
    </div>
  );
};
