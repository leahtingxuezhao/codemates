import React, { Component } from "react";

class SingleComment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { username, profile_pic, comment } = this.props;

    return (
      <div>
        <div>{username}</div>
        <div>{comment}</div>
      </div>
    );
  }
}

export default SingleComment;
