import React from 'react';
import { footerLinks } from '../constants/labels';
import '../styles/footer.css';

const Footer = () => {
  const footerList = footerLinks.map((link) => {
    return (
      <li key={link.id}>
        <a href='https://google.com/'> {link.title}</a>
      </li>
    )
  })
  return (
    <div className='footer-container'>
      <div className='footer-details'>
        Copyright 2022. Octagon Assessment
      </div>
      <div className='footer-links'>
        <ul>
          {footerList}
        </ul>
      </div>
    </div>
  );
};

export default Footer;