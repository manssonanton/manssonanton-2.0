import React from 'react';
import './Nav.css'

function Nav() {
    return <div className= 'nav-container'>
        <nav>
            <div className= 'logo'>
                AM
            </div>
            <ul className= 'nav-list'>
                <li className= 'nav-list-item'>
                    <a>HOME</a>
                </li>
                <li className= 'nav-list-item'>
                    <a>PROJECTS</a>
                </li>
                <li className= 'nav-list-item'>
                    <a>ABOUT</a>
                </li>
            </ul>
        </nav>
    </div>;
  }

  export default Nav;