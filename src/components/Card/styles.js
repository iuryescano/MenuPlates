import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative; /* Necessário para posicionar o coração */
  width: 304px;
  height: 462px;
  padding: 20px;
  border-radius: 8px;
  background-color: #00070A;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #FFF; /* Texto branco */
  border-radius: 8px;
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
  font-size: 18px;
  color: #007bff;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  button {
    background-color: #f0f0f0;
    border: none;
    padding: 5px 10px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 4px;
    color: #000;
  }

  span {
    margin: 0 10px;
    font-size: 18px;
    font-weight: bold;
    color: #FFF; /* Cor branca para o texto da quantidade */
  }
`;

export const IncludeButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const FavoriteIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  svg {
    font-size: 24px;
    color: ${({ favorited }) => (favorited ? "red" : "#FFF")};
    transition: color 0.3s ease;
  }
`;