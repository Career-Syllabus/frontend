import React from 'react';
import { Route } from "react-router-dom";
import Welcome from "./components/Welcome.js";
import Footer from './components/Footer.js';
import EmailConfirmation from './components/EmailConfirmation.js';
import Dashboard from "./components/Dashboard.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
import Contact from "./components/Contact.js";
import Features from "./components/Features.js";
import About from "./components/About.js";

import './styles/App.css';

function App() {


  return (
    <div className="App">
      <Route exact path="/" component={Welcome} />
      <Route exact path="/EmailConfirmation" component={EmailConfirmation} />
      <Route exact path="/Dashboard" component={Dashboard} />
      <Route exact path="/SignIn" component={SignIn} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Features" component={Features} />
      <Route exact path="/About" component={About} />

      <Footer />
    </div>
  );
}

export default App;
