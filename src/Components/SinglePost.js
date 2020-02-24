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
      user_id,
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
            state: {
              index,
              id,
              title,
              username,
              user_id,
              profile_pic,
              content,
              image
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
        <div className="post-title">{title}</div>
      </div>
    );
  }
}

export default withRouter(SinglePost);
