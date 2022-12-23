import React from 'react';
import { FooterContainer } from './index.styles';

function Footer() {
  return (
    <FooterContainer className="footer">
      ©<a href="https://github.com/iamheewonkim">iamheewonkim</a>, Built with{' '}
      <a href="https://github.com/JaeYeopHan/gatsby-starter-bee">
        Gatsby-starter-bee
      </a>
    </FooterContainer>
  );
}

export default Footer;
