import React from 'react';
import '../styles/SignIn.css';

function SignIn() {
  return (
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
     <p>don’t have an account? sign up here.</p>
     <p>forgot password?</p>
     <button>submit</button>
    </div>
    </div>
  );
}

export default SignIn;