import React from 'react';
import { headerLinks } from '../constants/labels';
import { Link } from 'react-router-dom';
import logo from '../assests/logo.png';
import '../styles/header.css';

const Header = () => {
  const headerList = headerLinks.map((link) => {
    return (
      <li key={link.id}>
        <Link to={'/'}> {link.title}</Link>
      </li>
    )
  });

  return (
    <div className='header-container'>
      <div className='header-logo'>
        <img src={logo} alt='generic company logo'/>
        <Link to={'/'}>
          <span> Lorem ipsum </span>
        </Link>
      </div>
      <div className='header-links'>
        <ul>
          {headerList}
        </ul>
      </div>
    </div>
  );
};

export default Header;