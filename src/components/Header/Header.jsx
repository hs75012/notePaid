import React from 'react';
import FooterStyled from './FooterStyled';
import { Facebook, Twitter, Instagram } from 'react-feather';

const Header = () => (
  <FooterStyled>
    <p>Developpé par A'Bloc &#9400; 2020</p>
    <li>Suivez nous sur <a href="https://twitter.com/" className="link-footer">Twitter<Twitter className="icons-footer"/></a></li>
    <li>Suivez nous sur <a href="https://facebook.org/" className="link-footer">FaceBook<Facebook className="icons-footer"/></a></li>
    <li>Suivez nous sur <a href="https://instagram.com/" className="link-footer">Instagram<Instagram className="icons-footer"/></a></li>
  </FooterStyled>
);

export default Header;