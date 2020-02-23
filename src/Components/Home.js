import React from "react";
import homepageImage from "../../src/image_folder/homepage.jpeg";
import eventsImage from "../image_folder/events.jpeg";
import playgroundsImage from "../image_folder/playgrounds.png";
import projectsImage from "../image_folder/projects.jpeg";

function Home(props) {
  return (
    <div>
      {" "}
      <div className="mission-box">OUR MISSION</div>
      <div className="homepage-p">Build your own coding networks...</div>
      <img src={homepageImage} alt="homepage" id="homepagePicture"></img>
      <div className="homepage-p">How it works?</div>
      <div className="threeFunctions">
        <div className="playgrounds-home">
          {" "}
          <img
            src={playgroundsImage}
            alt="image"
            className="function-image"
          ></img>
          <div>Playgrounds</div>
        </div>
        <div className="playgrounds-home">
          {" "}
          <div>Projects</div>
          <img src={projectsImage} alt="image" className="project-image"></img>
        </div>
        <div className="playgrounds-home">
          <img src={eventsImage} alt="image" className="function-image"></img>
          <div>Events</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
