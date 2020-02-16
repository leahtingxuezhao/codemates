import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SingleProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, username, profile_pic, languages } = this.props;
    return (
      <div className="postBox">
        <div>{title}</div>
        <div>{username}</div>
        <div>{profile_pic}</div>
        <div>{languages}</div>
      </div>
    );
  }
}

export default withRouter(SingleProject);
