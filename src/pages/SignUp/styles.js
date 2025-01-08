import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Garante que o container ocupa toda a altura da tela */
  width: 100%;

  /* Evita rolagem lateral */
  overflow-x: hidden;

  > main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1; /* Faz o conteúdo expandir para ocupar o espaço disponível */
  }
`;

export const Content = styled.div`
  height: 100%; /* Ajuste automático do espaço disponível */
  width: 80%;
  max-width: 100%; /* Opcional: Defina um limite para a largura */
  max-height: 80%;
  margin: 0 auto; /* Centraliza horizontalmente */
  padding: 1rem; /* Espaçamento interno */
  box-sizing: border-box; /* Inclui padding/border no cálculo da largura/altura */
  overflow-y: auto; /* Adiciona rolagem vertical somente se necessário */
  display: flex;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 50%;
  align-items: center;
`

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  gap: 1rem;
`;

export const FildBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  width: 50%;
`

export const Border = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 30rem;
  height: 40rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.BLACK_700};

  > h1 {
    font-family: Poppins;
    font-weight: 400;
  }

  >a {
    text-decoration: none;
    color: white;
    font-family: Poppins;
    font-weight: 300;
    font-size: 1rem;
  }
`

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 21.75rem;
  gap: 0.5rem;

  >p {
    opacity: 70%;
  }
  
  >input {
    border: 1px solid white;
    height: 3rem;
    background-color: ${({ theme }) => theme.COLORS.BLACK_700};
    color: white;
    padding: 1rem;
    outline: none;
  }
`;


export const ButtonEnter = styled.button`
  width: 21.75rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.COLORS.RED_300};
  color: white;
  border-radius: 0.4rem;
  border: none;
`