import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 28rem;
  gap: 13px;
  padding: 20px;
  border-radius: 8px;
  background-color: #00070A;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #FFF;
  border: none;

  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(0) scale(0.95);
  opacity: 0.9;
  will-change: transform, opacity;

  &.slide-left {
    animation: slideInLeft 0.6s both;
  }

  &.slide-right {
    animation: slideInRight 0.6s both;
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(20%) scale(0.9);
      opacity: 0;
    }
    to {
      transform: translateX(0) scale(0.95);
      opacity: 0.9;
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(-20%) scale(0.9);
      opacity: 0;
    }
    to {
      transform: translateX(0) scale(0.95);
      opacity: 0.9;
    }
  }

  &:hover {
    transform: scale(1) translateY(-5px);
    opacity: 1;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const DishImage = styled.img`
  width: 176px;
  height: 176px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

export const DishTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: #FFF;
`;

export const DishDescription = styled.p`
  font-size: 14px;
  color: #aaa; /* Cor de descrição mais clara */
  margin-bottom: 10px;
`;

export const DishPrice = styled.span`
  font-size: 26px;
  color: #82F3FF;
  margin-bottom: 15px;
  font-family: 'Roboto', sans-serif;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background-color: #00070A;
    border: none;
    margin-top: 15px;
    padding: 5px 1.5rem;
    font-size: 20px;
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

export const IncludeButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: red;
  }
`;

export const FavoriteIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  padding: 0.5rem;

  svg {
    font-size: 24px;
    color: ${({ $isFavorited }) => ($isFavorited ? "red" : "none")}; // Prefixo $ para transient props
    transition: color 0.3s ease;
    
  }
  a {
    text-decoration: none;
    color: #FFF;
  }
`;

export const Includerefec = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`

