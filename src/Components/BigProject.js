import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { pathOr } from "ramda";

import axios from "axios";

class BigProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  messageUser = () => {
    const { username, user_id } = pathOr(
      {},
      ["history", "location", "state"],
      this.props
    );

    const user = this.props.user.user_id;
    const user_name = this.props.user.username;
    console.log("APPLE ID :", user);
    console.log("THIS IS LEAH :", username);
    console.log("This is apple :", user_name);
    console.log("Leah ID:", user_id);

    this.props.history.push({
      pathname: `/chat/${user_id}/${user}/${username}`,
      state: { username }
    });
  };

  deleteProject = id => {
    console.log("delete project id", id);
    axios.delete(`/api/delete_project/${id}`).then(() => {
      this.props.history.push("/projects");
    });
  };

  render() {
    console.log(
      "this.props.history.location.state :",
      this.props.history.location.state
    );

    const {
      title,
      description,
      username,
      languages,
      profile_pic,
      user_id,
      id
    } = pathOr({}, ["history", "location", "state"], this.props);

    const user = this.props.user.user_id;
    const user_name = this.props.user.username;

    const editButton = () => {
      console.log("CURRENT USER APPLE ID :", user);
      console.log("THIS IS LEAH :", username);
      console.log("Leah ID:", user_id);
      console.log("This is apple :", user_name);

      if (user === user_id) {
        return (
          <div>
            <button>Edit</button>
            <button
              onClick={() => {
                console.log("this.props :", this.props);
                this.deleteProject(id);
              }}
            >
              Delete
            </button>
          </div>
        );
      } else {
        return (
          <div className="contactPoster">
            <img src={profile_pic} className="projectUserImage"></img>
            <button onClick={this.messageUser}>Message {username}</button>
          </div>
        );
      }
    };

    return (
      <div className="postAreaB">
        <div className="bigPost-title-containerB">
          <div>Project Title : {title}</div>
        </div>
        <div className="bigPost-title-containerC">
          Required Languages : {languages}
        </div>
        <div className="post-content">Details : {description}</div>

        <div>{editButton()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state bigProject:", state.authReducer.user);
  return {
    user: state.authReducer.user
  };
}

export default connect(mapStateToProps)(withRouter(BigProject));
