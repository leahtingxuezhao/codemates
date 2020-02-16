import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import SinglePost from "./SinglePost";

class PlaygroundsMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios
      .get("/api/get_posts")
      .then(res => {
        console.log("res.data :", res.data);
        this.setState({ posts: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    let postList = this.state.posts.map(element => {
      return (
        <SinglePost
          title={element.post_title}
          username={element.username}
          profile_pic={element.profile_pic}
        />
      );
    });
    console.log("postList :", postList);
    return (
      <div>
        <div>Playgrounds</div>
        <button onClick={() => this.props.history.push("/newpost")}>
          New Post
        </button>
        <div>{postList}</div>
      </div>
    );
  }
}

export default withRouter(PlaygroundsMain);
