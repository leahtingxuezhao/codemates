import React, { Component } from "react";
import { render } from "@testing-library/react";
import axios from "axios";
import newPostImage from "../image_folder/newpost-header.jpeg";
import addImage from "../image_folder/add-picture.png";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post_title: "",
      content: "",
      post_image: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  submit = (post_title, content, post_image) => {
    axios
      .post("/api/create_post", { post_title, content, post_image })
      .then(() => {
        this.props.history.push("/playgrounds");
      });
  };

  render() {
    const { post_title, content, post_image } = this.state;
    console.log("post_title :", post_title);
    console.log("content :", content);
    console.log("post_image :", post_image);

    return (
      <div>
        <img src={newPostImage}></img>
        <div id="create-post">CREATE YOUR NEW POST</div>
        <div className="post-box">
          <div className="addImage">
            <img src={addImage} alt="addImage"></img>
          </div>
          <div className="newpost-title">Image Address :</div>
          <input
            name="post_image"
            onChange={e => this.handleChange(e)}
            placeholder="image address"
            className="post-input"
          ></input>
          <div className="newpost-title">Post Title :</div>
          <input
            name="post_title"
            onChange={e => this.handleChange(e)}
            placeholder="Post Title"
            className="post-input"
          ></input>
          <div className="newpost-title">Post Content :</div>
          <textarea
            name="content"
            onChange={e => this.handleChange(e)}
            placeholder="Post Content"
            className="newpost-content"
          ></textarea>
          <button
            onClick={() => this.submit(post_title, content, post_image)}
            className="post-submit"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default NewPost;
