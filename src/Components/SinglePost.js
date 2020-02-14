import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, username, profile_pic } = this.props;
    return <div>{title}</div>;
  }
}

export default withRouter(SinglePost);
