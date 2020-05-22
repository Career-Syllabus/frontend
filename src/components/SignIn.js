import React from 'react';
import Nav from "./Nav.js";
import '../styles/SignIn.css';

function SignIn() {
  return (
    <>
    <Nav />
     <div class="SignInContainer">
     <h1>SignIn Page</h1>
     <form>
       <input
          type="text"
          placeholder="username"
          required
       />
       <input
          type="text"
          placeholder="password"
          required
       />
     </form>
     <p>don’t have an account? sign up <a href="/SignUp">here.</a></p>
     <h3>forgot password?</h3>
     <button>submit</button>
    </div>
    </>
  );
}

export default SignIn;