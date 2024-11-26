import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  > main {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centraliza verticalmente */
    align-items: center; /* Centraliza horizontalmente */
    flex: 1; /* Garante que o main ocupe o espaço restante */

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

export const BackPage = styled.a`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 26px;
  padding: 0.5rem;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid red;
  align-self: flex-start; /* Garante que o BackPage fique no início horizontalmente */
`;

export const Plate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border: 1px solid red;

  > img {
    opacity: 75%;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
