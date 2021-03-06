import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { pathOr } from "ramda";
import axios from "axios";
import SingleComment from "./SingleComment";
import bigPostImage from "../image_folder/bigPost.jpeg";
import bigpostHeader from "../image_folder/bigpostHeader.png";

class BigPost extends Component {
  constructor(props) {
    super(props);

    const { title, content, username, image } = pathOr(
      {},
      ["history", "location", "state"],
      this.props
    );
    this.state = {
      comment: "",
      comments: [],
      isVisible: false,
      post_title: "",
      content: "",
      post_image: "",
      displayTitle: title,
      displayContent: content,
      displayPostImage: image,
      displayUsername: username
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

  updatePost = (post_title, content, post_image) => {
    const { id } = pathOr({}, ["history", "location", "state"], this.props);
    axios
      .put(`/api/update_post/${id}`, { post_title, content, post_image })
      .then(() => {
        this.setState({
          isVisible: false,
          displayTitle: post_title,
          displayContent: content,
          displayPostImage: post_image
        });
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

  toggle() {
    this.setState({ isVisible: !this.state.isVisible });
    console.log("after click isVisible :", this.state.isVisible);
  }

  render() {
    const renderContent = props => {};
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

      console.log("original isVisible :", this.state.isVisible);

      const editBox = () => {
        const { post_title, content, post_image } = this.state;
        if (this.state.isVisible) {
          return (
            <div className="bigEditbox">
              <div className="editboxA">
                <p>New Title</p>
                <input
                  placeholder={displayTitle}
                  name="displayTitle"
                  value={displayTitle}
                  onChange={e => this.handleChange(e)}
                ></input>
              </div>
              <div className="editboxA">
                <p>New Content</p>
                <input
                  placeholder={displayContent}
                  name="displayContent"
                  value={displayContent}
                  onChange={e => this.handleChange(e)}
                ></input>
              </div>
              <div className="editboxA">
                <p>New Image Address</p>
                <textarea
                  placeholder={displayPostImage}
                  name="displayPostImage"
                  value={displayPostImage}
                  onChange={e => this.handleChange(e)}
                ></textarea>
              </div>
              <button
                onClick={() =>
                  this.updatePost(
                    displayTitle,
                    displayContent,
                    displayPostImage
                  )
                }
                className="edit-update"
              >
                Update
              </button>
            </div>
          );
        }
      };

      if (user === user_id) {
        return (
          <div>
            <div className="update-button">
              <button
                className="button-p"
                onClick={() => {
                  this.toggle();
                }}
              >
                Edit
              </button>

              <button
                className="button-p"
                onClick={() => {
                  console.log("this.props :", this.props);
                  this.deletePost(id);
                }}
              >
                Delete
              </button>
            </div>
            <div className="dropdown-editbox">{editBox()}</div>
          </div>
        );
      }
    };

    const commentArea = () => {
      return (
        <div className="share-box">
          <div className="share-title">Share Your Thoughts</div>
          <textarea
            placeholder="Leave your comments"
            name="comment"
            onChange={e => this.handleChange(e)}
            className="share-comment"
          ></textarea>
          <button
            onClick={() => this.createComment(user, id, this.state.comment)}
            className="sharebox-button"
          >
            Submit
          </button>
          {commentList}
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
    console.log("this.state.post_image :", this.state.post_image);
    console.log("this.state.content :", this.state.content);
    console.log("this.state.post_title :", this.state.post_title);
    const {
      displayContent,
      displayPostImage,
      displayTitle,
      displayUsername
    } = this.state;
    return (
      <div>
        <img src={bigpostHeader} alt="bigPost" className="bigPostImageB"></img>
        <div className="postArea">
          <div className="bigPost-title-container">
            <div>Post Title : {displayTitle}</div>
            <div>Post By User: {displayUsername}</div>
          </div>
          <img
            src={displayPostImage}
            alt="post-image"
            className="post-image"
          ></img>
          <div className="post-content">Post Content: {displayContent}</div>

          <div>{editButton()}</div>
        </div>
        <div>{commentArea()}</div>
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
