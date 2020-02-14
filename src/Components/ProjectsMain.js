import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ProjectsMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Projects</div>
        <button onClick={() => this.props.history.push("/newproject")}>
          New Project
        </button>
      </div>
    );
  }
}

export default withRouter(ProjectsMain);
