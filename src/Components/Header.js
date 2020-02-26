import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import logo from "../image_folder/logo.png";
import { pathOr } from "ramda";
import axios from "axios";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    const { username } = pathOr(
      {},
      ["history", "location", "state"],
      this.props
    );

    const authInfo = () => {
      console.log("this.state.username :", this.state.username);
      if (username) {
        return <div className="nav-title">WELCOME</div>;
      } else {
        return (
          <div
            onClick={() => this.props.history.push("/auth")}
            className="nav-title"
          >
            GET STARTED
          </div>
        );
      }
    };
    return (
      <div className="header-box">
        <div className="nav-wrap">
          <div className="logo-box">
            <img src={logo} alt="logo" className="header-logo"></img>
            <div
              className="company_name"
              onClick={() =>
                this.props.history.push({
                  pathname: "/",
                  state: { username }
                })
              }
            >
              CODEMATES
            </div>
          </div>
          <div className="nav-bar">
            <div
              onClick={() =>
                this.props.history.push({
                  pathname: "/playgrounds",
                  state: { username }
                })
              }
              className="nav-title"
            >
              Playgrounds
            </div>
            <div
              onClick={() =>
                this.props.history.push({
                  pathname: "/projects",
                  state: { username }
                })
              }
              className="nav-title"
            >
              Projects
            </div>
            <div
              onClick={() =>
                this.props.history.push({
                  pathname: "/events",
                  state: { username }
                })
              }
              className="nav-title"
            >
              Events
            </div>
            <div>{authInfo()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
