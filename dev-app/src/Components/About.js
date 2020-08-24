import React from 'react';
import './Nav.css'

function Nav() {
    return <div className= 'nav-container'>
        <nav>
            <div className= 'logo'>
                Anton Månsson
            </div>
            <ul className= 'nav-list'>
                <li className= 'nav-list-item'>
                    Home
                </li>
                <li className= 'nav-list-item'>
                    Work
                </li>
                <li className= 'nav-list-item'>
                    About
                </li>
            </ul>
        </nav>
    </div>;
  }

  export default Nav;