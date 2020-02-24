import React, { Component } from "react";
import { render } from "@testing-library/react";
import axios from "axios";
import addImage from "../image_folder/add-picture.png";
import newImage1 from "../image_folder/newpost-1.jpeg";
import newImage2 from "../image_folder/newpost-2.jpeg";
import newImage3 from "../image_folder/newpost-3.jpeg";

class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project_title: "",
      project_description: "",
      project_languages: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  submit = (project_title, project_description, project_languages) => {
    axios
      .post("/api/create_project", {
        project_title,
        project_description,
        project_languages
      })
      .then(() => {
        this.props.history.push("/projects");
      });
  };

  render() {
    const {
      project_title,
      project_description,
      project_languages
    } = this.state;
    console.log("project_title :", project_title);
    console.log("project_description :", project_description);
    console.log("project_languages :", project_languages);

    return (
      <div className="newProjectPage">
        <div className="image-container">
          <img src={newImage1} className="newProjectImage"></img>
          <img src={newImage2} className="newProjectImage"></img>
          <img src={newImage3} className="newProjectImage"></img>
        </div>
        <div>
          <div id="create-post">CREATE YOUR NEW PROJECT</div>
          <div className="post-box">
            <div className="addImage">
              <img src={addImage} alt="addImage"></img>
            </div>
            <div className="newpost-title">Projec Title</div>
            <input
              name="project_title"
              onChange={e => this.handleChange(e)}
              placeholder="Project Title"
              className="post-input"
            ></input>
            <div className="newpost-title">Project Languages</div>
            <input
              name="project_languages"
              onChange={e => this.handleChange(e)}
              placeholder="Project Languages"
              className="post-input"
            ></input>
            <div className="newpost-title">Project Description</div>
            <textarea
              name="project_description"
              onChange={e => this.handleChange(e)}
              placeholder="Project Description"
              className="newpost-content"
            ></textarea>
            <button
              onClick={() =>
                this.submit(
                  project_title,
                  project_description,
                  project_languages
                )
              }
              className="post-submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewProject;
