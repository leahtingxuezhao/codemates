import React from "react";
import homepageImage from "/Users/dt/repos-2/devMountain/Codemates/codemates/src/image_folder/homepage.jpeg";

function Home(props) {
  return (
    <div>
      {" "}
      <div className="homepage-p">Build your own coding networks...</div>
      <img src={homepageImage} alt="homepage"></img>
      <div className="homepage-p">How it works?</div>
    </div>
  );
}

export default Home;
