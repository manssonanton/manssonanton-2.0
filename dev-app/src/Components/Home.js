import React from 'react';
import './Home.css'

function Home() {
    return <section className='home'>
        <div className="background-image"></div>
        <div className="content-container">
            <h4>Hi, my name is</h4>
            <h2 className="glitch">Anton Månsson</h2>
            <h3>I'm a software engineer</h3>
            <p>During work I mostly develop backend in .NET but during my free time I enjoy doing web development and design.</p>
        </div>
    </section>;
}

export default Home;