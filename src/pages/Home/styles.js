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
  position: relative;
  margin-top: 10.25rem;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  height: 16.25rem;
  width: 70rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SvgImage = styled.img`
  position: absolute;
  left: -4.5rem;
  top: 105%;
  transform: translateY(-100%);
  width: auto;
  height: 150%;
`;

export const TextContainer = styled.div`
  color: white;
  text-align: left;
  margin-left: 37rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-family: 'Poppins';
  font-weight: 400;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;


export const TitleRefec = styled.h1`
  font-size: 2rem;
  font-family: 'Poppins';
  font-weight: 400;
  `;

export const Description = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
  font-family: 'Roboto';
  opacity: 70%;
  `;

export const Refecdad = styled.div`
    display: flex;
    flex-direction: column;
    width: 70rem;
    > h1 {
      margin-top: 2.5rem;
    }
  `;
  
export const Refecbox = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  position: relative; /* Para manter as setas e os gradientes posicionados corretamente */
`;

export const Sobredad = styled.div`
    display: flex;
    flex-direction: column;
    > h1 {
      margin-top: 2.5rem;
    }
  
  `;
export const Sobrebox = styled.div`
  margin-top: 1rem;
  width: 70rem;
  display: flex;
  flex-direction: column;
  gap: 23px;
  position: relative; /* Para manter as setas e os gradientes posicionados corretamente */
`;

export const Drinkdad = styled.div`
    display: flex;
    flex-direction: column;
    > h1 {
      margin-top: 2.5rem;
    }
  
  `;
export const Drinkbox = styled.div`
  margin-top: 1rem;
  width: 70rem;
  display: flex;
  flex-direction: column;
  gap: 23px;
  position: relative; /* Para manter as setas e os gradientes posicionados corretamente */
`;

export const CardBox = styled.div`
  display: flex;
  overflow-x: hidden;
  gap: 2.5rem;
  width: 100%;
  padding: 0 1rem; /* Para dar espaço para as setas nas laterais */
  border-radius: 5px;
  /* Adicionando gradientes para opacidade nas pontas */
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 5rem;
    z-index: 2; /* Mantém acima dos cards */
    pointer-events: none; /* Permite clique nos cards mesmo sob o gradiente */
  }

  &::before {
  left: 0;
  background: linear-gradient(to right, rgba(0, 10, 15, 0.9), transparent);
}

&::after {
  right: 0;
  background: linear-gradient(to left, rgba(0, 10, 15, 0.9), transparent);
}
`;

export const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-30%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1;
  color: white;
  padding: 10px;
  font-size: 1.5rem;
  border-radius: 50%;
  transition: opacity 0.1s ease;
  

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.8;
  }

  &.left {
    left: 0; /* Fixado na esquerda do Refecbox */
    opacity: 100% ;
  }

  &.right {
    right: 0; /* Fixado na direita do Refecbox */
  }
`;
