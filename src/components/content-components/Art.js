import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useParams,
  Routes,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import "../../styles/art.scss";

// if piece is clicked (state value: focused), image fills div className="content"
// and information is shown at base of sidebar
// const ZoomedPiece = () => (

// )

const IndividualPiece = (
  {art, artClick, focusedArt, setFocusedArt}) => {

  const handleClick = () => {
    focusedArt === art ? setFocusedArt(null) : artClick(art)
    // artClick(art)
  }

  return (
    <li className="art-container">
      <img src={art.imgPath} onClick={handleClick}/>
    </li>
  );
};

const ZoomedPiece = ({art, artClick}) => {

  const handleClick = () => {
    artClick(art)
  }
  return (
    <img className="zoomed-art" src={art.imgPath} onClick={handleClick} />
  )
}

const Art = (props) => {
  const links = [];
  const linkList = [];

  // CHANGE THIS TO SET FOCUSEDART TO WHATEVER IS CLICKED
  const [focusedArt, setFocusedArt] = useState(null);

  const createSidebar = (artList) => {
    // console.log(artList);
    artList.map((art, i) => {
      if (!links.includes(art.link)) {
        links.push(art.link);
        let newLink = `/art/${art.tag}`;
        //console.log(newLink);
        linkList.push(
          <NavLink key={i + art.tag} to={newLink}>
            {art.link}
          </NavLink>
        );
      }
    });
    return <ul>{linkList}</ul>;
  };

  const artClick = (artObj) => {
    //console.log(artObj)
    // setFocusedArt(artObj)
    focusedArt === artObj ? setFocusedArt(null) : setFocusedArt(artObj)
  }


  const eachPiece = () => {
    if(!focusedArt) {
      return props.artList.map((art, index) => {
        return (
          <IndividualPiece 
            key={index} 
            art={art} 
            artClick={artClick}
            focusedArt={focusedArt}
            setFocusedArt={setFocusedArt}
          />
        );
      });
    } else {
      return (
        <ZoomedPiece
          art={focusedArt}
          artClick={artClick}
          focusedArt={focusedArt}
          setFocusedArt={setFocusedArt}
        />
      )
    }
  };

  return (
    <div className="art-page">
      <div className="sidebar">
        {/* Routes here for each series, grouping. Portraits, Forms of Self-Alchemy, The Depths, etc */}
        <ul>{createSidebar(props.artList)}</ul>

        {/* focusedArt ? <ArtInfo className="focused-art-info" style={bottom: 0, left: 0} */}
        
      </div>
      <div className="content">
        {/* {focusedArt ? <ZoomedPiece className="focused-art" art={focusedArt} artClick={artClick}/> : <ul>{eachPiece()}</ul>} */}
        {/* {focusedArt ? <div><p>focused art set:</p><img src={focusedArt.imgPath} width="20px"/></div> : <p>bepis</p>} */}
        <ul>{eachPiece()}</ul>
      </div>
    </div>
  );
};;

export default Art;
