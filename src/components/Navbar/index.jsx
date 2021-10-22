import React from 'react';
import { Link } from 'react-scroll';
import './styles.sass';

const Navbar = () => {

    return (
        <div className="navbar-container">
            <div className="navlinks-container">
                <ul className="links-wrapper">
                    <li className="link-item">
                        <Link
                            to='home'
                            smooth spy
                            exact='true'
                            activeClass="active"
                            className="link"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="link-item">
                        <Link
                            to='about-section'
                            smooth spy
                            exact='true'
                            offset={-20}
                            activeClass="active"
                            className="link"
                        >
                            About
                        </Link>
                    </li>
                    <li className="link-item">
                        <Link
                            to='projects-section'
                            smooth spy
                            exact='true'
                            offset={-20}
                            activeClass="active"
                            className="link"
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="link-item">
                        <Link
                            to='contact'
                            smooth spy
                            exact='true'
                            offset={-20}
                            activeClass="active"
                            className="link"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
