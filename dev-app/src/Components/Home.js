import React from 'react';
import './Home.css'

function Home() {
    return <div className= 'home'>
            <h3 className= 'header-name'>MY NAME IS ANTON</h3>
        <img src='https://manssonanton.com/assets/Pictures/About/me_ski.jpg'></img>
        <div className= 'info-text'>
            <p>
                I'm a software engineer based in Sweden.
            </p>
        </div>
    </div>;
  }

  export default Home;