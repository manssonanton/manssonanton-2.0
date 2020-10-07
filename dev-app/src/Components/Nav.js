import React, { Component } from 'react';
import './Nav.css'
import { render } from 'react-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



class Nav extends Component {
    constructor(props) {
        super(props);
        let prev;
    }

    componentDidMount() {
        this.prev = window.scrollY;
        window.addEventListener('scroll', this.handleScroll);
        Events.scrollEvent.register('begin', function (to, element) {
            console.log('begin', arguments);
        });
        Events.scrollEvent.register('end', function (to, element) {
            console.log('end', arguments);
        });
        scrollSpy.update();
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    handleScroll(event) {
        const window = event.currentTarget;

        if (this.prev > window.scrollY) {
            console.log("scrolling up");
        } else if (this.prev < window.scrollY) {
            console.log("scrolling down");
        }
        this.prev = window.scrollY;
    }
    render() {
        return <div className='nav-container'>
            <nav>
                <div className='logo'>
                    <Link to="home" smooth={true} duration={500}><span className="logo-dev">DEV </span>/ MANSSON</Link>
                </div>
                <div>
                    <span>Malmö, Sweden 2020</span>
                </div>
                {/* <ul className='nav-list'>
                    <li className='nav-list-item'>
                        <span className="list-item-number">01.</span>
                        <Link activeClass="active" className="home-link" to="home" spy={true} smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className='nav-list-item'>
                        <span className="list-item-number">03.</span>
                        <Link activeClass="active" className="project-link" to="projects" spy={true} smooth={true} duration={500} >Projects</Link>
                    </li>
                    <li className='nav-list-item'>
                        <span className="list-item-number">02.</span>
                        <Link activeClass="active" className="about-link" to="about" spy={true} smooth={true} duration={500}>About</Link>
                    </li>
                    <li className='nav-list-item'>
                        <span className="list-item-number">04.</span>
                        <Link activeClass="active" className="contact-link" to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul> */}
            </nav>
            <section className="right-navigation">
                <div id="rightNav">
                    <nav className="side-nav">
                        {/* <ul> */}
                        <li><Link activeClass="active" className="side-nav-link" to="home" spy={true} smooth={true} duration={500} >
                            Home
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" /></svg>
                            {/* <span className="link-line"></span> */}
                            </Link></li>
                        <li><Link activeClass="active" className="side-nav-link" to="projects" spy={true} smooth={true} duration={500} >
                            Projects
                            {/* <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M9.484 15.696l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm0-5l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm0-5l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm10.516 11.304h-8v1h8v-1zm0-5h-8v1h8v-1zm0-5h-8v1h8v-1zm4-5h-24v20h24v-20zm-1 19h-22v-18h22v18z" /></svg> */}
                        </Link></li>
                        <li><Link activeClass="active" className="side-nav-link" to="about" spy={true} smooth={true} duration={500}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" /></svg>
                        </Link></li>
                        <li><Link activeClass="active" className="side-nav-link" to="contact" spy={true} smooth={true} duration={500}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" /></svg>
                        </Link></li>
                        {/* <li> <a onClick={() => scroll.scrollTo(100)}>Scroll To 100!</a></li>*/}
                        {/* </ul> */}
                        <div className="right-line-container">
                            <div className="line"></div>
                        </div>
                    </nav>

                </div>
            </section>
            <section className="left-navigation">
                <div id="leftNav">
                    <div>

                        <nav className="mediaSideNavLinks">
                            <div className="line"></div>
                            <a className="socialMediaLogoSidenav" href="https://www.facebook.com/anton.mansson.7?ref=bookmarks" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="#e7e7e7" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                            </a>
                            <a className="socialMediaLogoSidenav" href="https://www.instagram.com/mansson_anton/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="#e7e7e7" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>                        </a>
                            <a className="socialMediaLogoSidenav" href="https://www.linkedin.com/in/anton-mansson/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="#e7e7e7" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                            </a>
                            <a className="socialMediaLogoSidenav" href="https://github.com/manssonanton" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>                        </a>
                            <a className="socialMediaLogoSidenav" href="https://twitter.com/mansson_anton1" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="#e7e7e7" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>                        </a>
                        </nav>
                    </div>
                </div>
            </section>
        </div>;
    }
}

export default Nav;





