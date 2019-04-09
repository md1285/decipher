import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const nav = props.user 
  ?
  <div>
      <NavLink to='/'>Logo</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to=''
        onClick={props.handleLogout}
      >Log Out</NavLink>

  </div>
  :
  <div>
      <NavLink to='/'>Logo</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/login'>Log In</NavLink>
      <NavLink to='/signup'>Sign Up</NavLink>
  </div>
  return (
    <div>
      {nav}
    </div>
  );
};

export default Navbar;