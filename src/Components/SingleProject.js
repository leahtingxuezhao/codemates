import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class SingleProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  render() {
    const {
      id,
      title,
      username,
      profile_pic,
      languages,
      user_id,
      description
    } = this.props;
    console.log("id :", id);
    return (
      <div
        className="projectBox"
        onClick={() =>
          console.log("clicked") ||
          this.props.history.push({
            pathname: `/project/${id}`,
            state: {
              title,
              username,
              profile_pic,
              languages,
              description,
              id,
              user_id
            }
          })
        }
      >
        <div className="user-box">
          <div className="user-name">{username}</div>
          <img
            src={profile_pic}
            alt="profile-pic"
            className="post-userPic"
          ></img>
        </div>
        <div>
          <div className="project-languages">Languages: {languages}</div>
          <div className="project-title">{title}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(SingleProject);
