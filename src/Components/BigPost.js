import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { pathOr } from "ramda";
import axios from "axios";
import bigPostImage from "../image_folder/bigPost.jpeg";
import SingleComment from "./SingleComment";

class BigPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      comments: []
    };
  }

  componentDidMount() {
    const { id } = pathOr({}, ["history", "location", "state"], this.props);
    this.reRender(id);
  }

  reRender = id => {
    console.log("this is post_id", id);
    console.log("this.state.comments :", this.state.comments);
    axios
      .get(`/api/get_comments/${id}`)
      .then(res => {
        console.log("res.data :", res.data);
        this.setState({ comments: res.data });
      })
      .catch(err => console.log(err));
  };

  deletePost = id => {
    console.log("delete product id", id);
    axios.delete(`/api/delete_post/${id}`).then(() => {
      this.props.history.push("/playgrounds");
    });
  };

  createComment = (user_id, post_id, comment) => {
    const { id } = pathOr({}, ["history", "location", "state"], this.props);
    console.log("create comment id", post_id);
    axios
      .post("/api/create_comment", { user_id, post_id, comment })
      .then(() => {
        this.setState({ comment: "" });
        this.reRender(id);
      });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
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
    console.log("image :", image);
    console.log("title :", title);
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

    const commentArea = () => {
      return (
        <div>
          <div>Share your thoughts</div>
          <textarea
            placeholder="Leave your comments"
            name="comment"
            onChange={e => this.handleChange(e)}
          ></textarea>
          <button
            onClick={() => this.createComment(user, id, this.state.comment)}
          >
            Submit
          </button>
        </div>
      );
    };

    let commentList = this.state.comments.map(element => {
      return (
        <SingleComment
          comment={element.comment}
          username={element.username}
          profile_pic={element.profile_pic}
        />
      );
    });

    console.log(this.state.comment);

    return (
      <div>
        <img src={bigPostImage} alt="bigPost" className="bigPostImage"></img>
        <div className="postArea">
          <div>{title}</div>
          <div>{username}</div>
          <div>{content}</div>
          <img src={image} alt="post-image"></img>
          <div>{editButton()}</div>
        </div>
        <div>{commentArea()}</div>
        {commentList}
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
