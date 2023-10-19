import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Courses from "./Components/Courses";
function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Courses />
    </div>
  );
}

export default App;
