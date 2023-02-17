import React from "react";
import "./Card.css";

export const Card = ({ words, index }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{index + 1}</h2>
        <p
          className="card-text"
          dangerouslySetInnerHTML={{ __html: words }}
        ></p>
      </div>
    </div>
  );
};
