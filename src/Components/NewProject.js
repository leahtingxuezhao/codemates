import React, { Component } from "react";
import { render } from "@testing-library/react";
import axios from "axios";

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
      <div>
        <div>New Project</div>
        <div className="post-box">
          <div>project_title</div>
          <input
            name="project_title"
            onChange={e => this.handleChange(e)}
            placeholder="image address"
          ></input>
          <div>project_languages</div>
          <input
            name="project_languages"
            onChange={e => this.handleChange(e)}
            placeholder="Post Title"
          ></input>
          <div>project_description</div>
          <textarea
            name="project_description"
            onChange={e => this.handleChange(e)}
            placeholder="Post Content"
          ></textarea>
          <button
            onClick={() =>
              this.submit(project_title, project_description, project_languages)
            }
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default NewProject;
