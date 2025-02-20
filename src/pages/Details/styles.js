import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakpoints";

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

  a {
    color: inherit;
    text-decoration: none;
  }
  @media (prefers-reduced-motion: no-preference) {
    animation: fadeInUp 0.4s ease forwards;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
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

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

export const BackPage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 26px;
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

export const Plate = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 1rem;
  > img {
    opacity: 85%;
    border-radius: 50%;
    height: 15rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    padding: 1rem;
    > img {
      opacity: 85%;
      border-radius: 50%;
      height: 15rem;
    }
}
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    align-items: center;
  }
`;

export const Tags = styled.div`
  display: flex;

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const IncludeButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: red;
  }
`;

export const Includerefec = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background-color: #00070A;
    border: none;
    padding: 5px 1.5rem;
    font-size: 18px;
    cursor: pointer;
    border-radius: 4px;
    color: #FFF;
  }

  span {
    margin: 0 10px;
    font-size: 18px;
    font-weight: bold;
    color: #FFF; /* Cor branca para o texto da quantidade */
  }
`;

export const EditButton = styled(Link)`
  background-color: #750310;
  color: white;
  border: none;
  padding: 13px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgb(80, 2, 11);
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 19.75rem;
  }
`

export const CardDescription = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limita a 3 linhas */
  -webkit-box-orient: vertical;
  margin: 0;
  padding: 0;
`;