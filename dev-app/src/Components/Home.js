import React from 'react';
import { Link } from 'react-scroll';
import './Home.css'

function Home() {
    return <section className='home'>
        <div className="background-image"></div>
        <div className="content-container">
            {/* <h4>Hi, my name is</h4> */}
            <h2 className="left"><span className="green">//</span> ANTON MÅNSSON</h2>
            <h3 className="right">&#60; Engineer × Developer &#62;</h3>
            {/* <h3 className="center">Based in ⟶</h3>
            <h3 className="right">Malmö, Sweden.</h3> */}
            {/* <p>During work I mostly develop backend in .NET but during my free time I enjoy doing web development and design.</p> */}
            {/* <Link className="project-button" to="projects" spy={true} smooth={true} duration={500} >// Resume</Link> */}
        </div>
    </section>;
}

export default Home;