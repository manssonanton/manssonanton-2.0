import React from 'react';
import './About.css'
import me from "../Assets/me.jpg"

function About() {
  return <section className='about'>
    <h3>1.0 ABOUT</h3>
    <div className="about-card-container">
      <img className="about-pic" alt="Me" src={me} />
      <div className="about-card">
        <span className="card-heading-number">1.1 </span>
        <h3 className="card-heading"> Who am I</h3>
        <hr />
        <p className="card-text">My name is Anton Månsson and I live in Malmö, Sweden. I'm a software engineer and currently work at Capgemini.
        <br></br> <br></br>
        During my spare time I enjoy photography and resently starting to enjoy design in all of it shapes and forms.
      </p>
      </div>
      {/* <div className="about-card"> */}
      {/* </div> */}
      <div className="about-card">
        <span className="card-heading-number">1.2 </span>
        <h3 className="card-heading"> Experience</h3>
        <hr />

      </div>
      <div className="about-card">
        <div className="card-item-container">
          <span className="card-heading-number">1.3 </span>
          <h3 className="card-heading"> Skills</h3>
          <hr />
          <ul>
            <li>.NET</li>
            <li>SQL</li>
            <li>Oracle</li>
            <li>Angular</li>
            <li>HTML / CSS</li>
            <li>Node.js</li>
            {/* <li>Azure</li> */}
          </ul>
        </div>
      </div>
    </div>
  </section>;
}

export default About;