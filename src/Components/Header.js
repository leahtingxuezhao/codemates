import React from "react";
import { withRouter, Link } from "react-router-dom";
import logo from "../image_folder/codemates_logo.jpeg";

function Header(props) {
  console.log(props);
  return (
    <div className="header-box">
      <img src={logo} alt="logo"></img>
      <div className="nav-bar">
        <div
          onClick={() => props.history.push("/playgrounds")}
          className="nav-button"
        >
          Playgrounds
        </div>
        <div
          onClick={() => props.history.push("/projects")}
          className="nav-button"
        >
          Projects
        </div>
        <div
          onClick={() => props.history.push("/events")}
          className="nav-button"
        >
          Events
        </div>
        <div onClick={() => props.history.push("/auth")} className="nav-button">
          GET STARTED
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
