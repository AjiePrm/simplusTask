import React from "react";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./page/landingPage";
import Example from "./page/example";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="example" element={<Example />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
