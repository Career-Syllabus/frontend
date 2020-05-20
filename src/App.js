import React from 'react';
import Nav from "./components/Nav.js";
import SignNav from "./components/SignNav.js";
import Welcome from "./components/Welcome.js";

import './styles/App.css';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <SignNav />
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;
