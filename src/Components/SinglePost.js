import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      index,
      id,
      title,
      username,
      profile_pic,
      content,
      image
    } = this.props;

    return (
      <div
        className="postBox"
        onClick={() =>
          this.props.history.push({
            pathname: `/post/${id}`,
            state: { index, id, title, username, profile_pic, content, image }
          })
        }
      >
        <div>{title}</div>
        <div>{username}</div>
        <div>{profile_pic}</div>
        <div>{content}</div>
      </div>
    );
  }
}

export default withRouter(SinglePost);
