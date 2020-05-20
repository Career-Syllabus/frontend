import React from 'react';
import "../styles/Nav.css";
import wave from "../assets/wave1.png";
import { NavLink } from "react-router-dom";


export default function Nav(props) {

  // let isWelcome = props.isWelcome
  // isWelcome = true;
  // console.log(isWelcome);

  return (
    <div class="signnav">
      <img class="wave1" src={wave} alt="gray wavy top"></img>
      <div class="navvy">
        <div class="NavBar">
          <NavLink to="/">home</NavLink>
          <NavLink to="/features">features</NavLink>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </div>
        {props.isWelcome ? (<div class="NavRight">
          <NavLink to="/signup">sign up</NavLink>
          <hr />
          <NavLink to="/signin">sign in</NavLink>
        </div>) : ("")}
      </div>
    </div>
  );
}
