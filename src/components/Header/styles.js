import styled from 'styled-components';

// Estilos do container do Header
export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BLACK_600};
  gap: 2.5rem;
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
  width: 40%;
`;

// Estilo para o ícone dentro da barra de busca
export const SearchIcon = styled.div`
  position: absolute;
  left: 10px; /* Posiciona o ícone dentro do campo */
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

// Estilo para a barra de busca com o ícone dentro
export const SearchBar = styled.input`
  width: 100%;
  height: 3rem;
  padding-left: 3rem; /* Espaço para o ícone */
  border-radius: 4px;
  border: none;
  font-size: 16px;
  outline: none;
  background-color: ${({ theme }) => theme.COLORS.BLACK_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
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
export const LogoutButton = styled.button`
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