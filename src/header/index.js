import React, { useState } from "react";
import "./style.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import { FaGithub } from "react-icons/fa";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            <Themetoggle />
            {socialprofils.github && (
              <button className="menu__button nav_ac">
                <a href={socialprofils.github} target="_blank" rel="noreferrer">
                  <FaGithub style={{ width: "1rem", height: "1rem" }} />
                </a>
              </button>
            )}
            <button className="menu__button nav_ac" onClick={handleToggle}>
              {!isActive ? (
                <CloseIcon style={{ width: "1.5rem", height: "1.5rem" }} />
              ) : (
                <MenuIcon style={{ width: "1.5rem", height: "1.5rem" }} />
              )}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/" className="my-2">
                      Home
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/intro" className="my-2">
                      Introduction
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link
                      onClick={handleToggle}
                      to="/artifacts"
                      className="my-2"
                    >
                      Artifacts
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link
                      onClick={handleToggle}
                      to="/epilogue"
                      className="my-2"
                    >
                      Epilogue
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
