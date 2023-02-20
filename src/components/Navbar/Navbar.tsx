import "./Navbar.css";

import React, { FC, useEffect, useState } from "react";

import { LINKS_INFO } from "../../utils/data/linksInfo";
import { RiArrowUpCircleFill } from "react-icons/ri";
import TemporaryDrawer from "../Drawer/Drawer";
import useIsVisible from "../../hooks/useIsVisible.jsx";

const NAVLINKS = LINKS_INFO.navbar;
type linksInfo = {
  title: string;
};
const SCROLL_BEHAVIOR = { behavior: "smooth" };

const HOME: string = "בית";
const LECTURES: string = "הרצאות";
const EDUCATION: string = "השכלה";
const CONTACT: string = "צור קשר";

export const Navbar = ({ refList }) => {
  const { home, lecture, exprience, contact, navbar } = refList;
  const LINKS = {
    [HOME]: home,
    [LECTURES]: lecture,
    [EDUCATION]: exprience,
    [CONTACT]: contact,
  };

  const [showModel, setShowModel] = useState(window.innerWidth);
  const [activeButton, setActiveButton] = useState(HOME);

  useEffect(() => {
    clickHandler(HOME);
    const handleWindowResize = () => setShowModel(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const clickHandler = (title: string) => {
    setActiveButton(title);
    const { [title]: selectedRef } = LINKS;
    selectedRef.current.scrollIntoView(SCROLL_BEHAVIOR);
  };

  const linksList = (LINKS_INFO: linksInfo[]) => {
    const displayLinks = LINKS_INFO.map(({ title }) => {
      return (
        <li key={title}>
          <button
            className={`nav-link ${
              activeButton === title ? "nav-selcted" : ""
            }`}
            onClick={() => {
              clickHandler(title);
            }}
          >
            {title}
          </button>
        </li>
      );
    });
    return displayLinks;
  };

  const displayLinks = linksList(NAVLINKS);
  const navLinks = <ul className={`nav-list`}>{displayLinks}</ul>;
  const contactButton = (
    <button
      className="contact"
      onClick={() => {
        clickHandler(CONTACT);
      }}
    >
      צור קשר
    </button>
  );

  const scrollUpButton = () => {
    const isVisible = useIsVisible(navbar);
    if (isVisible) {
      return;
    }
    return (
      <button>
        <RiArrowUpCircleFill
          className="scroll-up-button"
          onClick={() => {
            clickHandler(HOME);
          }}
        />
      </button>
    );
  };

  const phoneScreenSize = showModel <= 770;

  return (
    <nav className="navbar-cover" ref={navbar}>
      <div className="drawer-and-button-container">
        {phoneScreenSize && (
          <TemporaryDrawer
            activeButton={activeButton}
            clickHandler={clickHandler}
          />
        )}
      </div>
      {navLinks}
      {scrollUpButton()}
    </nav>
  );
};
