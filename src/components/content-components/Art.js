import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useParams,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "../../styles/art.scss";

// if piece is clicked (state value: focused), image fills div className="content"
// and information is shown at base of sidebar
// const ZoomedPiece = () => (

// )

const IndividualPiece = ({
  art: { title, year, medium, size, imgPath, tag },
}) => {
  console.log(imgPath);
  return (
    <li className="art-container">
      <img src={imgPath} width="200" />
    </li>
  );
};

const Art = (props) => {
  const eachPiece = () => {
    return props.artList.map((art, index) => {
      return <IndividualPiece key={index} art={art} />;
    });
  };

  return (
    <div className="art-page">
      <div className="sidebar">
        {/* Routes here for each series, grouping. Portraits, Forms of Self-Alchemy, The Depths, etc */}
        <h2>words</h2>
      </div>
      <div className="content">
        <h1>Art</h1>
        <ul>{eachPiece()}</ul>
      </div>
    </div>
  );
};

export default Art;
