import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import SinglePost from "./SinglePost";
import bigPostImage from "../image_folder/bigPost.jpeg";
import "./PlaygroundsMain.css";
import plusIcon from "../image_folder/iconfinder_icon-plus-circle_2867932.png";

class PlaygroundsMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.reRender();
  }

  reRender = () => {
    axios
      .get("/api/get_posts")
      .then((res) => {
        console.log("res.data :", res.data);
        this.setState({ posts: res.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    let postList = this.state.posts.map((element, index) => {
      console.log("element :", element);
      return (
        <SinglePost
          index={index}
          content={element.content}
          image={element.post_image}
          id={element.post_id}
          title={element.post_title}
          username={element.username}
          profile_pic={element.profile_pic}
          user_id={element.user_id}
        />
      );
    });

    console.log("postList :", postList);
    return (
      <div className="post-background">
        <img src={bigPostImage} alt="bigPost" className="bigPostImage"></img>

        <div className="newpost-T">create a new post</div>
        <img
          onClick={() => this.props.history.push("/newpost")}
          src={plusIcon}
          className="newpost-button"
        ></img>

        <div>{postList}</div>
      </div>
    );
  }
}

export default withRouter(PlaygroundsMain);
