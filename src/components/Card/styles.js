import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 28rem;
  padding: 20px;
  border-radius: 8px;
  background-color: #00070A;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #FFF;
  border-radius: 8px;

  opacity: 0.6;
  transform: scale(0.9);
  transition: opacity 0.4s ease, transform 0.4s ease;

  &.slide-left, &.slide-right {
    opacity: 1;
    transform: scale(1);
  }
`;

export const DishImage = styled.img`
  width: 176px;
  height: 176px;
  border-radius: 8px;
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

  svg {
    font-size: 24px;
    color: ${({ $isFavorited }) => ($isFavorited ? "red" : "none")}; // Prefixo $ para transient props
    transition: color 0.3s ease;
    
  }
`;

export const Includerefec = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`