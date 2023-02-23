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
const TREATMENT: string = "רקע";

export const Navbar = ({ refList }) => {
  const { home, lecture, exprience, contact, navbar, treatment } = refList;
  const LINKS = {
    [HOME]: home,
    [LECTURES]: lecture,
    [EDUCATION]: exprience,
    [CONTACT]: contact,
    [TREATMENT]: treatment,
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

  const isPhoneScreenSize = showModel <= 770;

  return (
    <nav className="navbar-cover" ref={navbar}>
      <div className="drawer-and-button-container">
        {isPhoneScreenSize && (
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
