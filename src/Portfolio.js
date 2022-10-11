import React from "react";
import {
  BrowserRouter as Router,
  useParams,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Coding from "./components/content-components/Coding";
import Art from "./components/content-components/Art";
import NavBar from "./components/navbar";
import { FaReact } from "react-icons/fa";
import "./styles/portfolio.scss";

const About = () => {};

const Contact = () => {};

const Links = () => {};

const Portfolio = (props) => {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
        </div>
        <div className="content-container">
          <Routes>
            <Route path="/art" element={<Art />} />
            <Route path="/coding" element={<Coding />} />
          </Routes>
        </div>
      </Router>
      <h2 className="footer">
        <FaReact /> Made with React
      </h2>
    </div>
  );
};

export default Portfolio;
