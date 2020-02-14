import React, { Component } from "react";
import { render } from "@testing-library/react";
import axios from "axios";

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

  submit = (post_title, content, post_imag) => {
    axios
      .post("/api/create_post", { post_title, content, post_imag })
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
        <div>NewPost</div>
        <div className="post-box">
          <div>Image GIF Video</div>
          <input
            name="post_image"
            onChange={e => this.handleChange(e)}
            placeholder="image address"
          ></input>
          <div>Title</div>
          <input
            name="post_title"
            onChange={e => this.handleChange(e)}
            placeholder="Post Title"
          ></input>
          <div>Content</div>
          <textarea
            name="content"
            onChange={e => this.handleChange(e)}
            placeholder="Post Content"
          ></textarea>
          <button onClick={() => this.submit(post_title, content, post_image)}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default NewPost;
