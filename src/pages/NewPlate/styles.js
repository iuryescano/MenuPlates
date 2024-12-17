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

  .tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
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

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin-left: 1rem;
  margin-top: 1.2rem;

  > input {
    width: 25rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.BLACK_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    height: 3rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-start; /* Alinha todos os itens no topo */
  gap: 1rem; /* Espaçamento horizontal entre os campos */
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin-left: 1rem;
  margin-top: 1.2rem;

  > select {
    width: 25rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.BLACK_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    height: 3rem;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    padding-right: 2rem;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10"><path fill="%23ffffff" d="M7 10L0 0h14z"/></svg>');
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 0.7rem;
    cursor: pointer;
  }

  > select:hover {
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0rem 0rem 1.5rem;
  width: 42.5rem;
  gap: 0.8rem;

  > div {
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.COLORS.BLACK_800};
    padding: 0.8rem 0.5rem 0.5rem;
  }
`;