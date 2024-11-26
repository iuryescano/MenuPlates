import React, { useState } from "react"; 
import { 
  CardContainer, 
  DishImage, 
  DishTitle, 
  DishDescription, 
  DishPrice, 
  QuantityControl, 
  IncludeButton, 
  FavoriteIcon,
  Includerefec
} from "./styles";
import { FaHeart } from "react-icons/fa"; // Ícone de coração
import { Link } from "react-router-dom"

export function Card({ imageSrc, title, description, price, isVisible, animationClass }) {
  const [quantity, setQuantity] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 0 && setQuantity(quantity - 1);

  const toggleFavorite = () => setIsFavorited(!isFavorited);

  return (
    <CardContainer className={animationClass} style={{ opacity: isVisible ? 1 : 0.5 }}>
      <FavoriteIcon onClick={toggleFavorite} $isFavorited={isFavorited}>
        <FaHeart />
      </FavoriteIcon>
      <DishImage src={imageSrc} alt={title} />
      <DishTitle>{title}</DishTitle>
      <DishDescription>{description}</DishDescription>
      <DishPrice>R$ {price.toFixed(2)}</DishPrice>

      <Includerefec>
        <QuantityControl>
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </QuantityControl>
        <IncludeButton onClick={() => quantity > 0 && alert(`Incluído ${quantity} ${title}(s)`)}
          disabled={quantity === 0}>
          Incluir
      </IncludeButton>
      </Includerefec>
    </CardContainer>
  );
}
