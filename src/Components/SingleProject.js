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
    return (
      <div
        className="projectBox"
        onClick={() =>
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
        <div>{title}</div>
        <div>{username}</div>
        <div>{profile_pic}</div>
        <div>{languages}</div>
      </div>
    );
  }
}

export default withRouter(SingleProject);
