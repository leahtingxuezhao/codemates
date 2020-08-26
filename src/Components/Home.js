import React from "react";
import homepageImage from "../../src/image_folder/homepage.jpeg";
import eventsImage from "../image_folder/events.jpeg";
import playgroundsImage from "../image_folder/playgrounds.png";
import projectsImage from "../image_folder/projects.jpeg";
import "./Home.css";

function Home(props) {
  return (
    <div className="fullHomePage">
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
          <div className="instruction">
            <p className="instruction-title">Playgrounds</p>
            <div className="instruction-content">
              We want to connect and build relationships with everyone we
              interact with. We want our users to share their ideas, to grow and
              achieve their goals in our Codemates community with us.
            </div>
          </div>
        </div>
        <div className="playgrounds-home">
          {" "}
          <div className="instruction-project">
            <p className="instruction-title">Projects</p>
            <div className="instruction-contentB">
              While every single Codeamtes member is capable of creating great
              things, we know that we're stronger as a team. Great
              communication, open and honest feedback, and recognizing each
              other's strengths are just some things that make us greater
              together.
            </div>
          </div>
          <img src={projectsImage} alt="image" className="project-image"></img>
        </div>
        <div className="playgrounds-home">
          <img src={eventsImage} alt="image" className="function-image"></img>
          <div className="instruction-events">
            <p className="instruction-title">Events</p>
            <div className="instruction-content">
              We go the extra mile to make sure Codemates members have a great
              time on our platform both online and offline. We’ve even hopped on
              flights to connect with our users by hosting Codemates events all
              around the world.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
