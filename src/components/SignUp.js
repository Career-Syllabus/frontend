import React from 'react';
import { NavLink } from "react-router-dom";
import Nav from "./Nav.js";
import '../styles/SignUp.css';

function SignUp() {
  return (
   <>
   <Nav />
    <div class="SignUpContainer">
     <h1>SignUp Page</h1>
     <form>
       <input
          type="text"
          placeholder="username"
          required
       />
       <input
          type="text"
          placeholder="email"
          required
       />
       <input
          type="text"
          placeholder="first name"
          required
       />
       <input
          type="text"
          placeholder="last name"
          required
       />
       <input
          type="text"
          placeholder="password"
          required
       />
      <p>already have an account? log in <NavLink to="/signin">here.</NavLink></p>
      <button type="submit">submit</button>
     </form>
    </div>
   </>
  );
}

export default SignUp;