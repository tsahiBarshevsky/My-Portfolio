import React from 'react';
import { Link } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './styles.sass';

const Navbar = () => {

    const location = useLocation();

    return (
        <div className="navbar-container">
            <div className="navlinks-container">
                {location.pathname === '/' ?
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
                                to='about'
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
                                to='projects'
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
                    :
                    <ul className="links-wrapper">
                        <li className="link-item">
                            <HashLink
                                to='/home'
                                className="link"
                            >
                                Home
                            </HashLink>
                        </li>
                        <li className="link-item">
                            <HashLink
                                to='/#about'
                                className="link"
                            >
                                About
                            </HashLink>
                        </li>
                        <li className="link-item">
                            <HashLink
                                to='/#projects'
                                className="link"
                            >
                                Projects
                            </HashLink>
                        </li>
                        <li className="link-item">
                            <HashLink
                                to='/#contact'
                                className="link"
                            >
                                Contact
                            </HashLink>
                        </li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default Navbar;
