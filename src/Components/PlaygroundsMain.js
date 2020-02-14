import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class PlaygroundsMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>Playgrounds</div>
        <button onClick={() => this.props.history.push("/newpost")}>
          New Post
        </button>
      </div>
    );
  }
}

export default withRouter(PlaygroundsMain);
