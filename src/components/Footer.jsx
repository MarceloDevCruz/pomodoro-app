import React from 'react';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">Created By Marcelo Cruz</p>
      <a href="https://github.com/MarceloDevCruz/instagram" target="_blank">
        <BsGithub className="footer__icon" />{' '}
      </a>
    </footer>
  );
};

export default Footer;
