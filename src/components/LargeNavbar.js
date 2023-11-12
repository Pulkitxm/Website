import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./components.css";
import Typewriter from "./Typing";
import axios from "axios";
const Navbar = (props) => {
  const backendBaseUrl =
    "https://portfolio-backend-ecru-one.vercel.app";
  const [show, setshow] = useState(false);
  const location = useLocation();
  const [numOfUsers, setNumOfUsers] = useState()
  useState(() => {
    setTimeout(() => {
      setshow(true);
    }, 2000);
  });
  useEffect(() => {
    const countUsers = async () => {
      try {
        const response = await axios.get(backendBaseUrl + "/api/countUsers");
        if(response.data.length>=0) setNumOfUsers(response.data.length)
      } catch (error) {
        console.error("Error storing user data:", error);
      }
    };
    countUsers();
  }, []);
  return (
    <div className={`${props.darkMode ? "darkNav" : "lightNav"}`}>
      <Link draggable="false" to="/">
        {/* <div className="nav-pk" onClick={(e) => props.toploadAnimate()}></div> */}
        <div className="nav-pk" onClick={(e) => props.toploadAnimate()}></div>
        <h1
          className="Typewriter"
          id="name"
          onClick={(e) => props.toploadAnimate()}
        >
          {!props.isloaded && show ? (
            <Typewriter text="Pulkit" speed={100} />
          ) : (
            <Typewriter text="‎" speed={100} />
          )}
        </h1>
      </Link>
      <ul className="nav-ul">
        <Link draggable="false" to="/">
          <li
            className={
              location.pathname === "/"
                ? "activeItem Item homeLi"
                : "Item homeLi"
            }
            style={{
              color: location.pathname === "/" ? "var(--primColor)" : "#ccc",
            }}
            onClick={(e) => props.toploadAnimate()}
          >
            Home
          </li>
        </Link>
        <Link draggable="false" to="/about">
          <li
            className={
              location.pathname === "/about"
                ? "activeItem Item whoAmILi"
                : "Item whoAmILi"
            }
            style={{
              color:
                location.pathname === "/about" ? "var(--primColor)" : "#ccc",
            }}
            onClick={(e) => props.toploadAnimate()}
          >
            About
          </li>
        </Link>
        <Link draggable="false" to="/projects">
          <li
            className={
              location.pathname === "/projects"
                ? "activeItem Item projectsLi"
                : "Item projectsLi"
            }
            style={{
              color:
                location.pathname === "/projects" ? "var(--primColor)" : "#ccc",
            }}
            onClick={(e) => props.toploadAnimate()}
          >
            Projects
          </li>
        </Link>
        <Link draggable="false" to="/resume">
          <li
            className={
              location.pathname === "/resume"
                ? "activeItem Item resumeLi"
                : "Item resumeLi"
            }
            style={{
              color:
                location.pathname === "/resume" ? "var(--primColor)" : "#ccc",
            }}
            onClick={(e) => props.toploadAnimate()}
          >
            Resume
          </li>
        </Link>
        <Link draggable="false" to="/contact">
          <li
            className={
              location.pathname === "/contact"
                ? "activeItem Item contactLi"
                : "Item contactLi"
            }
            style={{
              color:
                location.pathname === "/contact" ? "var(--primColor)" : "#ccc",
            }}
            onClick={(e) => props.toploadAnimate()}
          >
            Contact
          </li>
        </Link>
      </ul>
      <h1>
        <input
          type="checkbox"
          className="btn-check"
          id="btn-check-outlined"
          autoComplete="off"
        />
        <div className="center" style={{ textAlign: "center" }}>
          <label
            className="btn btn-outline-secondary darkToggle"
            htmlFor="btn-check-outlined"
            onClick={() => {
              const currMode = !props.darkMode;
              props.setDarkMode(currMode);
              window.localStorage.setItem("darkMode", currMode);
            }}
            style={{
              color: "var(--primColor)",
              fontWeight: "900",
              textShadow: "none",
              backgroundColor: props.darkMode ? "#272727" : "#fff",
            }}
          >
            {props.darkMode ? "Dark" : "Light"} Mode
          </label>
        </div>
        <div className="center" style={{ textAlign: "center" }}>
          <label
            className="views"
            style={{
              color: props.darkMode ? "#fff" : "#000",
              cursor: "text",
              backgroundColor: props.darkMode ? "#272727" : "#fff",
            }}
          >
            {numOfUsers==0 && <Typewriter text={`you're the first viewer`} speed={100} />}
            {numOfUsers>0 && <Typewriter text={`${numOfUsers}+ viewers`} speed={100} />}
          </label>
        </div>
      </h1>
    </div>
  );
};

export default Navbar;
