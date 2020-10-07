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
        <div className="c1">
          <Home />
        </div>
        <div className="c2">
          <Projects />
        </div>
        <div className="c3">
          <About />
        </div>
        <div className="c4">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
