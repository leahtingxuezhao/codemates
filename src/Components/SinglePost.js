import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, username, profile_pic } = this.props;
    return (
      <div className="postBox">
        <div>{title}</div>
        <div>{username}</div>
        <div>{profile_pic}</div>
      </div>
    );
  }
}

export default withRouter(SinglePost);
