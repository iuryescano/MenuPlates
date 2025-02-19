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

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const BackPage = styled.div`
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

  a {
    color: inherit;
    text-decoration: none;
  }
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
  width: 55.5rem;
  gap: 0.8rem;


  .tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.COLORS.BLACK_800};
    padding: 0.8rem 0.5rem 0.5rem;
  }
`;

export const Price = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.4rem;
    > input {
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: none;
      background-color: ${({ theme }) => theme.COLORS.BLACK_800};
      color: ${({ theme }) => theme.COLORS.WHITE};
      height: 3.5rem;
      width: 13rem;
    }
  `;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem 0rem 0rem 1.5rem;
  max-width: 95%;

  > textarea {
    height: 10.75rem;
    width: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.COLORS.BLACK_800};
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    resize: none; /* Impede redimensionamento */
    font-size: 1rem; /* Ajusta o tamanho da fonte */
    line-height: 1.5; /* Ajusta o espaçamento entre linhas */
    text-align: left; /* Alinha o texto horizontalmente à esquerda */
    vertical-align: top; /* Garante que o texto fique no topo */
    overflow-y: auto; /* Permite rolagem vertical, se necessário */
    box-sizing: border-box; /* Inclui padding e border no cálculo */
  }
`;

export const SaveButton = styled.button`
  margin-top: 1rem; /* Espaçamento acima */
  width: 10.75rem;
  height: 3rem;
  background-color:rgb(88, 153, 121);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(63, 109, 86);
  }
`;

export const DeletePlate = styled.button`
  margin-top: 1rem; /* Espaçamento acima */
  width: 10.75rem;
  background-color: #AB4D55;
  height: 3rem;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: darkred;
  }
`;

export const Buttons = styled.div`
display: flex;
gap: 1rem;
margin-left: 64%;
`;
