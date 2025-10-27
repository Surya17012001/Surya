import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="body">
        <Home />
        <Skills />
        <Timeline />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
