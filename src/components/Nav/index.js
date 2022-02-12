import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {  
    return (
      <nav className="navbar">
      <ul className="flex-row">
      <li className="mx-2">
        <Link to="/about">About Me</Link>
        </li>
        <li className="mx-2">
        <Link to="/projects">Projects</Link>
        </li>
        <li className="mx-2">
        <Link to="/contact">Contact Me</Link>
        </li>
        <li className="mx-2">
        <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
    );
  }
  
  export default Nav;