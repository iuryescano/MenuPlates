import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: ${({ theme }) => theme.COLORS.BLACK_600};
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-top: auto; /* Adicionado para fixar no fundo */
`;

export const FooterLogo = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  opacity: 0.5;
`;

export const FooterText = styled.div`
  font-size: 14px;
  opacity: 0.5;
`;

