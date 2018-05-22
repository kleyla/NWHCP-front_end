import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <div className="appHeader">
      <header>
        <nav>
          <Link to="/" id="HomeLink">
            <img id='logo' src='./waypoint-web.png' alt='temp'/>
          </Link>
          <div id='links'>
            <Link className='navBar' to="/map">Map</Link>
            <Link className='navBar' to="/findPrograms">Find Programs</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;