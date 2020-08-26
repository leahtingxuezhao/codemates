import React, { Component } from "react";
import { render } from "@testing-library/react";
import axios from "axios";
import newPostImage from "../image_folder/newpost-header.jpeg";
import addImage from "../image_folder/add-picture.png";
import { pathOr } from "ramda";
import "./SinglePost.css";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post_title: "",
      content: "",
      post_image: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  submit = (post_title, content, post_image) => {
    const { username } = pathOr(
      {},
      ["history", "location", "state"],
      this.props
    );
    axios
      .post("/api/create_post", { post_title, content, post_image })
      .then(() => {
        this.props.history.push({
          pathname: "/playgrounds",
          state: { username },
        });
      });
  };

  render() {
    const { post_title, content, post_image } = this.state;
    console.log("post_title :", post_title);
    console.log("content :", content);
    console.log("post_image :", post_image);

    return (
      <div>
        <img src={newPostImage} className="newpost-header-image"></img>
        <div className="post-box">
          <div className="addImage">
            <img src={addImage} alt="addImage"></img>
          </div>
          <div className="newpost-title">IMAGE ADDRESS :</div>
          <input
            name="post_image"
            onChange={(e) => this.handleChange(e)}
            placeholder="image address"
            className="post-input"
          ></input>
          <div className="newpost-title">POST TITLE :</div>
          <input
            name="post_title"
            onChange={(e) => this.handleChange(e)}
            placeholder="post title"
            className="post-input"
          ></input>
          <div className="newpost-title">POST CONTENT :</div>
          <input
            name="content"
            onChange={(e) => this.handleChange(e)}
            placeholder="post content"
            className="post-input"
          ></input>
          <button
            onClick={() => this.submit(post_title, content, post_image)}
            className="post-submit"
          >
            SUBMIT
          </button>
        </div>
      </div>
    );
  }
}

export default NewPost;
