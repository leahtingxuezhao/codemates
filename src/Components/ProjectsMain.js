import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import SingleProject from "./SingleProject";

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
    let projectList = this.state.projects.map(element => {
      return (
        <SingleProject
          title={element.project_title}
          languages={element.project_languages}
          username={element.username}
          profile_pic={element.profile_pic}
        />
      );
    });
    console.log("projectList :", projectList);
    return (
      <div>
        <div>Projects</div>
        <button onClick={() => this.props.history.push("/newproject")}>
          New Project
        </button>
        <div>{projectList}</div>
      </div>
    );
  }
}

export default withRouter(ProjectsMain);
