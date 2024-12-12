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
  width: 100%;
  max-width: 1200px; /* Opcional: Defina um limite para a largura */
  margin: 0 auto; /* Centraliza horizontalmente */
  padding: 1rem; /* Espaçamento interno */

  box-sizing: border-box; /* Inclui padding/border no cálculo da largura/altura */
  overflow-y: auto; /* Adiciona rolagem vertical somente se necessário */
`;

export const BackPage = styled.a`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 22px;
  font-weight: bold;
  padding: 0.5rem;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  align-self: flex-start; /* Garante que o BackPage fique no início horizontalmente */
`;

export const H1 = styled.p`
  padding: 1rem;
  margin-left: 0.5rem;
  font-size: 28px;
`;

export const ImageUploadSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
  gap: 1rem;
  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 14rem;
    background-color: ${({ theme }) => theme.COLORS.BLACK_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.BLACK_600};
    }
  }
`;

export const InputFile = styled.input`
  display: none; /* Esconde o input padrão */
`;

export const PreviewImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_500};
`;