import React from 'react';
import "../styles/Nav.css";
import wave from "../assets/wave1.png";
import { NavLink } from "react-router-dom";

export default function Nav(props) {

  return (
    <div class="signnav">
      <img class="wave1" src={wave} alt="gray wavy top"></img>
      <div class="navvy">
        <div class="logo">
          <img src="./newlogo.png" alt="large gear logo"></img>
          <h1 class="smallLogo">career syllabus</h1>
        </div>
          <div class="NavBar">
            <NavLink to="/">home</NavLink>
            <NavLink to="/features">features</NavLink>
            <NavLink to="/about">about</NavLink>
            <NavLink to="/contact">contact</NavLink>
          </div>
      </div>
    </div>
  );
}
