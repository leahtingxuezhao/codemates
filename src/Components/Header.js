import React from "react";
import { withRouter, Link } from "react-router-dom";
import logo from "../image_folder/logo.png";

function Header(props) {
  console.log(props);
  return (
    <div className="header-box">
      <div className="nav-wrap">
        <div className="logo-box">
          <img src={logo} alt="logo" className="header-logo"></img>
          <div className="company_name" onClick={() => props.history.push("/")}>
            CODEMATES
          </div>
        </div>
        <div className="nav-bar">
          <div
            onClick={() => props.history.push("/playgrounds")}
            className="nav-title"
          >
            Playgrounds
          </div>
          <div
            onClick={() => props.history.push("/projects")}
            className="nav-title"
          >
            Projects
          </div>
          <div
            onClick={() => props.history.push("/events")}
            className="nav-title"
          >
            Events
          </div>
          <div
            onClick={() => props.history.push("/auth")}
            className="nav-title"
          >
            GET STARTED
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
