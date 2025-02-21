import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
`;

export const Header = styled.div`
  position: fixed;
  display: flex;
  gap: 1rem;
  align-items: center;
  align-items: flex-end;
  padding: 3.5rem;
  top: 0;
  left: 0;
  width: 100%;
  height:15%;
  background-color: ${({ theme }) => theme.COLORS.BLACK_700};

  p {
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
  }

  svg {
    font-size: 2.5rem;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 15%;
  width: 100%;
  height:80vh;
  padding: 4rem;
  background-color: ${({ theme }) => theme.COLORS.BLACK_800};
`;

export const Footer = styled.div`
  position: absolute;
  display: flex;
  gap: 4rem;
  top: 90%;
  width: 100%;
  height:10vh;
  padding: 4rem;
  background-color: ${({ theme }) => theme.COLORS.BLACK_700};
`;

export const FooterLogo = styled.div`
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  opacity: 0.5;
`;

export const FooterText = styled.div`
  font-size: 12px;
  opacity: 0.5;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%; /* Aumentando a largura para chegar mais perto do botão */
  
  form {
    width: 100%;
  }
`;

// Estilo para o ícone dentro da barra de busca
export const SearchIcon = styled.div`
  position: absolute;
  left: 0.8rem; /* Ajuste para melhor alinhamento */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${({ theme }) => theme.COLORS.GRAY_300}; /* Cor mais suave */
  
  svg {
    width: 22px;
    height: 22px;
  }
`;


// Estilo para a barra de busca com o ícone dentro
export const SearchBar = styled.input`
  width: 100%;
  height: 3.5rem; /* Aumentando a altura para ficar mais confortável */
  padding: 0.75rem 1rem 0.75rem 3rem;
  border-radius: 6px;
  border: 1px solid transparent;
  font-size: 16px;
  outline: none;
  background-color: ${({ theme }) => theme.COLORS.BLACK_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_400};
    background-color: ${({ theme }) => theme.COLORS.BLACK_700};
  }
`;

export const Section = styled.section`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  text-decoration: underline;
  width: 100%;
  font-size: 2rem;
  font-weight: 100;
  font-family: 'Poppins', sans-serif;
  a {
    color: inherit;
    text-decoration: none;
  }
  color: white;
  
`;