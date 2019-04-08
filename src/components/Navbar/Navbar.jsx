import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav>
        <NavLink to='/'>Logo</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
        <NavLink to='/login'>Log In</NavLink>
        <NavLink to='/about'>About</NavLink>
    </nav>
);

export default Navbar;