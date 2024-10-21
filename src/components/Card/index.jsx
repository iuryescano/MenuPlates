import React, { useState } from "react";
import { 
  CardContainer, 
  DishImage, 
  DishTitle, 
  DishDescription, 
  DishPrice, 
  QuantityControl, 
  IncludeButton, 
  FavoriteIcon 
} from "./styles";
import { FaHeart } from "react-icons/fa"; // Ícone de coração

export function Card({ imageSrc, title, description, price }) {
  const [quantity, setQuantity] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 0 && setQuantity(quantity - 1);

  const toggleFavorite = () => setIsFavorited(!isFavorited);

  return (
    <CardContainer>
      <FavoriteIcon onClick={toggleFavorite} favorited={isFavorited}>
        <FaHeart />
      </FavoriteIcon>
      <DishImage src={imageSrc} alt={title} />
      <DishTitle>{title}</DishTitle>
      <DishDescription>{description}</DishDescription>
      <DishPrice>R$ {price.toFixed(2)}</DishPrice>

      <QuantityControl>
        <button onClick={handleDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </QuantityControl>

      <IncludeButton onClick={() => alert(`Incluído ${quantity} ${title}(s)`)}>Incluir</IncludeButton>
    </CardContainer>
  );
}