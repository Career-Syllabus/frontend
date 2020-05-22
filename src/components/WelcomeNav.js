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
            <NavLink to="/Features">features</NavLink>
            <NavLink to="/About">about</NavLink>
            <NavLink to="/Contact">contact</NavLink>
          </div>
          <div class="navChildRight">
            <NavLink to="/SignUp">sign up</NavLink>
            <hr />
            <NavLink to="/SignIn">sign in</NavLink>
          </div>
        </div>
      </div>
  );
}
