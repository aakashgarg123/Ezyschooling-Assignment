import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
return (
    <nav className="navbar navbar-dark bg-dark">
        <Link style={{ textDecoration: 'none' }} to="/"><span className="navbar-brand  h1">Posts App</span></Link>
        <span className="navbar-text text-white" style={{paddingRight:'10px'}}>
            Made with ❤ for <a href="https://ezyschooling.com/">Ezyschooling</a>
        </span>
    </nav>
)
}


export default NavBar;