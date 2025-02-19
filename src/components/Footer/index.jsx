import React from 'react';
import { FooterContainer, FooterText, FooterLogo } from './styles';

export function Footer() {
  return (
    <FooterContainer>
      
      <FooterLogo>
        <svg width="26" height="30" viewBox="0 0 26 30" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 0L25.9904 7.5V22.5L13 30L0.00961876 22.5V7.5L13 0Z" fill="white"/>
        </svg>
        MenuPlates
      </FooterLogo>

      <FooterText>© 2025 - Desenvolvido por Iury Escano Cordeiro.</FooterText>
    </FooterContainer>
  );
}
