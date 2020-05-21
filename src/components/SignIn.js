import React from 'react';
import Nav from "./Nav.js";
import '../styles/SignIn.css';

function SignIn() {
  return (
    <>
    <Nav />
    <div>
     <h1>SignIn Page</h1>
     <div class="SignInContainer">
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
     <p>forgot password?</p>
     <button>submit</button>
    </div>
    </div>
    </>
  );
}

export default SignIn;