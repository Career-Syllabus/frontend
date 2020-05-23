import React from 'react';
import { NavLink } from "react-router-dom";
import wave from "../assets/wave1.png";
import '../styles/EmailConfirmation.css';

function EmailConfirmation() {
  return (
    <div class="emailContainer">
      <img class="emailWave" src={wave} alt="gray wavy top"></img>
      <div class="emailContainerChild">
        <NavLink to="/"><img class="biglogo" src="./newlogo.png" alt="large gear logo"></img></NavLink>
        <h2>thank you for joining</h2>
        <h1 class="bigtitle">career syllabus</h1>
        <h3>we have sent a confirmation email to youremail.com.
        <br />
        please confirm this address to proceed to your profile.</h3>
        <button>resend email</button>
      </div>
    </div>
  );
}

export default EmailConfirmation;