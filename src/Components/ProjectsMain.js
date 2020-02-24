import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import SingleProject from "./SingleProject";
import bigPostImage from "../image_folder/bigPost.jpeg";

class ProjectsMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/get_projects")
      .then(res => {
        console.log("res.data :", res.data);
        this.setState({ projects: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    let projectList = this.state.projects.map((element, index) => {
      return (
        <SingleProject
          index={index}
          id={element.project_id}
          title={element.project_title}
          languages={element.project_languages}
          username={element.username}
          profile_pic={element.profile_pic}
          user_id={element.user_id}
          description={element.project_description}
        />
      );
    });
    console.log("projectList :", projectList);
    return (
      <div className="post-background">
        <img src={bigPostImage} alt="bigPost" className="bigPostImage"></img>
        <button
          onClick={() => this.props.history.push("/newproject")}
          className="newpost-button"
        >
          Create a New Project
        </button>
        <div>{projectList}</div>
      </div>
    );
  }
}

export default withRouter(ProjectsMain);
