import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { pathOr } from "ramda";
import axios from "axios";
import "./Header.css";

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
        <div
          className="company_name"
          onClick={() =>
            this.props.history.push({
              pathname: "/",
              state: { username },
            })
          }
        >
          CODEMATES
        </div>

        <div className="nav-bar">
          <div
            onClick={() =>
              this.props.history.push({
                pathname: "/playgrounds",
                state: { username },
              })
            }
            className="nav-title"
          >
            PLAYGROUNDS
          </div>
          <div
            onClick={() =>
              this.props.history.push({
                pathname: "/projects",
                state: { username },
              })
            }
            className="nav-title"
          >
            PROJECTS
          </div>
          <div
            onClick={() =>
              this.props.history.push({
                pathname: "/events",
                state: { username },
              })
            }
            className="nav-title"
          >
            EVENTS
          </div>
          <div>{authInfo()}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
