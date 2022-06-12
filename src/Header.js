import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink to="/" activeStyle={{ color: 'tomato' }} end>
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink activeStyle={{ color: 'tomato' }} to="About">
        About
      </NavLink>{' '}
      |{' '}
      <NavLink activeStyle={{ color: 'tomato' }} to="Movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Header;
