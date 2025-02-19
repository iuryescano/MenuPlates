import styled from 'styled-components';

// Estilos do container do Header
export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BLACK_600};
  gap: 2.5rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

// Estilo para o nome "MenuPlates"
export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  gap: 1rem;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%; /* Aumentando a largura para chegar mais perto do botão */
  max-width: 500px; /* Limitando o tamanho em telas muito grandes */
  
  @media (max-width: 1024px) {
    width: 60%; /* Em telas médias, ocupa mais espaço */
  }

  @media (max-width: 768px) {
    width: 80%; /* Em telas menores, quase toda a largura */
  }

  @media (max-width: 480px) {
    width: 100%; /* Em telas muito pequenas, ocupa toda a largura */
  }

  form {
    width: 100%;
  }
`;

// Estilo para o ícone dentro da barra de busca
export const SearchIcon = styled.div`
  position: absolute;
  left: 14px; /* Ajuste para melhor alinhamento */
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



// Estilo para o container de "Pedidos" e quantidade
export const OrdersBox = styled.div`
  background-color: ${({ theme }) => theme.COLORS.RED_400};
  color: white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 216px;
  height: 3.5rem;
  font-size: 16px;
  text-align: center;
  gap: 0.5rem;
  font-family: 'Poppins';
`;

// Estilo para o botão de sair
export const LogoutButton = styled.div`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  &:hover {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;