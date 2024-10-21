import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  > main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Banner = styled.div`
  position: relative; /* Para que a imagem possa se posicionar em relação ao Banner */
  margin-top: 10.25rem;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  height: 16.25rem;
  width: 70rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SvgImage = styled.img`
  position: absolute; /* Permite que a imagem seja posicionada em relação ao Banner */
  left: -4rem; /* Posiciona a imagem à esquerda */
  top: 105%; /* Centraliza verticalmente */
  transform: translateY(-100%); /* Ajusta para que a imagem fique centralizada */
  width: auto; /* Ou defina uma largura específica */
  height: 150%; /* Ajusta a altura conforme necessário */
`;

export const TextContainer = styled.div`
  display: relative; /* Para o texto se posicionar em relação ao Banner */
  color: white; /* Altere conforme necessário */
  text-align: left; /* Alinha o texto à esquerda */
  margin-left: 37rem; /* Espaçamento à esquerda */
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem; /* Altere o tamanho da fonte conforme necessário */
  font-family: 'Poppins';
  font-weight: 400;
  margin: 0; /* Remove margens padrão */
`;

export const Description = styled.p`
  font-size: 1rem; /* Altere o tamanho da fonte conforme necessário */
  margin-top: 0.5rem; /* Espaçamento entre o título e a descrição */
  font-family: 'Roboto';
  opacity: 70%;
`;

export const Refecbox = styled.div`
  margin-top: 3.87rem;
  border: 1px solid red;
  height: 33.10rem;
  width: 70rem;
`;

export const TitleRefec = styled.h1`
  font-size: 2rem; /* Altere o tamanho da fonte conforme necessário */
  font-family: 'Poppins';
  font-weight: 400;
  margin: 0; /* Remove margens padrão */
`;