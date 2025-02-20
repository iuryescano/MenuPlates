import styled from 'styled-components';
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  align-items: center;
  padding: 2rem 1rem; // Reduza o padding em mobile
  background-color: ${({ theme }) => theme.COLORS.BLACK_600};
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-top: auto; /* Adicionado para fixar no fundo */

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 110%;
    text-align: center;
  }
`;

export const FooterLogo = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  opacity: 0.5;

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    margin-right: 1rem;
  }
`;

export const FooterText = styled.div`
  font-size: 14px;
  opacity: 0.5;
  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    font-size: 0.8rem;
  }
`;

