import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { pathOr } from "ramda";

import axios from "axios";

class BigPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deletePost = id => {
    console.log("delete product id", id);
    axios.delete(`/api/delete_post/${id}`).then(() => {
      this.props.history.push("/playgrounds");
    });
  };

  render() {
    console.log(
      "this.props.history.location.state :",
      this.props.history.location.state
    );
    console.log("this.state :", this.state);

    const { title, content, username, image, user_id, id } = pathOr(
      {},
      ["history", "location", "state"],
      this.props
    );
    const user = this.props.user.user_id;
    console.log("user :", user);
    const editButton = () => {
      console.log("user.id :", user);
      console.log("user :", user);

      if (user === user_id) {
        return (
          <div>
            <button>Edit</button>
            <button
              onClick={() => {
                console.log("this.props :", this.props);
                this.deletePost(id);
              }}
            >
              Delete
            </button>
          </div>
        );
      }
    };

    return (
      <div>
        <div>Big Post</div>
        <div>{title}</div>
        <div>{username}</div>
        <div>{content}</div>
        <div>{image}</div>
        <div>{editButton()}</div>
        <div>Comment Area</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state bigPost:", state.authReducer.user);
  return {
    user: state.authReducer.user
  };
}

export default connect(mapStateToProps)(withRouter(BigPost));
