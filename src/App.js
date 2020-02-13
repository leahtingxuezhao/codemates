import React from "react";
import "./App.css";
import routes from "./routes";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div>{routes}</div>
    </div>
  );
}

export default App;
