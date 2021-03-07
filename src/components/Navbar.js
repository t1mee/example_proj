import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () =>  (    
<nav className="navbar navbar-expand-lg navbar-dark bg-dark my-nav-style">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">НЛК</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">Портфолио</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/rate">Рейтинг</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="help">Помощь</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav> )