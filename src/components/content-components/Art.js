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
  //console.log(imgPath);
  return (
    <li className="art-container">
      <img src={imgPath} />
    </li>
  );
};

const Art = (props) => {
  const links = [];
  const linkList = [];

  const createSidebar = (artList) => {
    // console.log(artList);
    artList.map((art, i) => {
      if (!links.includes(art.link)) {
        links.push(art.link);
        let newLink = `/art/${art.tag}`;
        console.log(newLink);
        linkList.push(
          <NavLink key={i + art.tag} to={newLink}>
            {art.link}
          </NavLink>
        );
      }
    });
    return <ul>{linkList}</ul>;
  };

  const eachPiece = () => {
    return props.artList.map((art, index) => {
      return <IndividualPiece key={index} art={art} />;
    });
  };

  return (
    <div className="art-page">
      <div className="sidebar">
        {/* Routes here for each series, grouping. Portraits, Forms of Self-Alchemy, The Depths, etc */}
        <ul>{createSidebar(props.artList)}</ul>
      </div>
      <div className="content">
        <ul>{eachPiece()}</ul>
      </div>
    </div>
  );
};

export default Art;
