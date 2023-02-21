import React from "react";
import "./Card.css";
import { FaGraduationCap } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { MdPsychology } from "react-icons/md";

const ICONLIST = [<FaGraduationCap />, <MdPsychology />, <FaHandsHelping />];

export const Card = ({ words, index }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{ICONLIST[index]}</h2>
        <p
          className="card-text"
          dangerouslySetInnerHTML={{ __html: words }}
        ></p>
      </div>
    </div>
  );
};
