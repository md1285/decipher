import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'
import logo from '../../imgs/logo.png'

const Navbar = (props) => {
  const nav = props.user
    ?
    <div className={styles.NavbarWrapper}>
      <div className={styles.logoWrapper}>
          <NavLink to='/'><img className={styles.logoImage} src={logo} alt='logo' /></NavLink>
      </div>
      <div>
        <NavLink className={styles.link} to='/about'>About</NavLink>
        <NavLink className={styles.link} to='/chats'>Chats</NavLink>
        <NavLink className={styles.link} to=''
          onClick={props.handleLogout}
        >Log Out</NavLink>
      </div>

    </div>
    :
    <div className={styles.NavbarWrapper}>
      <div className={styles.logoWrapper}>
        <NavLink to='/'><img className={styles.logoImage} src='./imgs/logo.png' alt='logo' /></NavLink>
      </div>
      <div>
        <NavLink className={styles.link} to='/about'>About</NavLink>
        <NavLink className={styles.link} to='/login'>Log In</NavLink>
        <NavLink className={styles.link} to='/signup'>Sign Up</NavLink>
      </div>
    </div>
  return (
    <div>
      {nav}
    </div>
  );
};

export default Navbar;