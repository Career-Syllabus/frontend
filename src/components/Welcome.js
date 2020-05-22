import React from 'react';
import "../styles/Welcome.css";
import WelcomeNav from './WelcomeNav.js';

export default function Welcome(props) {

  return (
    <>
      <div class="welcomeContainer">
        <WelcomeNav />
      </div>
      <div class="Welcome">
        <img class="biglogo" src="./newlogo.png" alt="large gear logo"></img>
        <h1 class="bigtitle">career syllabus</h1>
        <h2 class="slogan">continuing education <br/> on your terms</h2>
      </div>
    </>
  );
}