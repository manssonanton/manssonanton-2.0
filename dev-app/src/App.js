import React from 'react'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import './App.css';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <div className="1">
          <Home />
        </div>
        <div className="2">
          <About />
        </div>
        <div className="3">
          <Projects />
        </div>
        <div className="4">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
