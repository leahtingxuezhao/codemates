import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { pathOr } from "ramda";
class BigProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(
      "this.props.history.location.state :",
      this.props.history.location.state
    );

    const { title, description, username, languages, profile_pic } = pathOr(
      {},
      ["history", "location", "state"],
      this.props
    );
    return (
      <div>
        <div>Big Post</div>
        <div>{title}</div>
        <div>{username}</div>
        <div>{description}</div>
        <div>{languages}</div>
        <div>{profile_pic}</div>
      </div>
    );
  }
}

export default withRouter(BigProject);
