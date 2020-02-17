import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { pathOr } from "ramda";
class BigPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const editButton = () => {};

    console.log(
      "this.props.history.location.state :",
      this.props.history.location.state
    );
    // this.setState({ title: this.props.history.location.state.title });
    const { title, content, username, image } = pathOr(
      {},
      ["history", "location", "state"],
      this.props
    );
    return (
      <div>
        <div>Big Post</div>
        <div>{title}</div>
        <div>{username}</div>
        <div>{content}</div>
        <div>{image}</div>
      </div>
    );
  }
}

export default withRouter(BigPost);
