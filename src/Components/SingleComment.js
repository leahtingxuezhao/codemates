import React, { Component } from "react";

class SingleComment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { username, profile_pic, comment } = this.props;

    return (
      <div className="post-comment-box">
        <div className="post-comment-container">
          <div className="comment-user">{username}</div>
          <div className="comment-c">{comment}</div>
        </div>
      </div>
    );
  }
}

export default SingleComment;
