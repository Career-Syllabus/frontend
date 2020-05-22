import React from 'react';
import { NavLink } from "react-router-dom";
import wave from "../assets/wave1.png";
import "../styles/WelcomeNav.css";


export default function WelcomeNav() {
  return (
      <div class="navParent">
        <img class="wave1" src={wave} alt="gray wavy top"></img>
        <div class="Nav">
          <div class="navChildLeft">
            <NavLink to="/">home</NavLink>
            <NavLink to="/features">features</NavLink>
            <NavLink to="/about">about</NavLink>
            <NavLink to="/contact">contact</NavLink>
          </div>
          <div class="navChildRight">
            <NavLink to="/signup">sign up</NavLink>
            <hr />
            <NavLink to="/signin">sign in</NavLink>
          </div>
        </div>
      </div>
  );
}
