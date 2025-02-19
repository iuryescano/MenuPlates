import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Alterado de height para min-height */
  width: 100%;

  > main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0 6rem; /* Ajuste o último valor conforme a altura do footer */
  }
  @media (prefers-reduced-motion: no-preference) {
    animation: fadeInUp 0.8s ease both;
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
  scroll-behavior: smooth;
  transition: scroll-left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before, &::after {
    transition: opacity 0.3s ease;
    opacity: ${({ $showGradient }) => ($showGradient ? 1 : 0)};
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
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  

  &:focus {
    outline: none;
  }

  &:hover {
    transform: translateY(-30%) scale(1.1);
    background: rgba(0, 10, 15, 0.9);
  }

  &.left {
    left: 0; /* Fixado na esquerda do Refecbox */
    opacity: 100% ;
  }

  &.right {
    right: 0; /* Fixado na direita do Refecbox */
  }
`;

export const NotFoundMessage = styled.p`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
  padding: 4rem 0;
  font-family: 'Poppins';
`;