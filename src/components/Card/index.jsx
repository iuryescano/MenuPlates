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
import { PiPencilSimple } from "react-icons/pi"; // Ícone de lápis
import { Link } from "react-router-dom"

export function Card({ imageSrc, title, description, price, isVisible, animationClass }) {
  const [quantity, setQuantity] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 0 && setQuantity(quantity - 1);

  const toggleFavorite = () => setIsFavorited(!isFavorited);

  const isAdmin = true; // Isso será controlado futuramente via banco de dados

  return (
    <CardContainer className={animationClass} style={{ opacity: isVisible ? 1 : 0.5 }}>
      {isAdmin ? (
        <FavoriteIcon>
          <Link to="/editplate/1">
            <PiPencilSimple />
          </Link>
        </FavoriteIcon>
      ) : (      
        <FavoriteIcon onClick={toggleFavorite} $isFavorited={isFavorited}>
          <FaHeart />
        </FavoriteIcon>
      )}

      <Link to={"/details/1"} style={{ textDecoration: 'none', color: 'inherit' }}>
        <DishImage src={imageSrc} alt={title} />
        <DishTitle>{title}</DishTitle>
        <DishDescription>{description}</DishDescription>
        <DishPrice>R$ {price.toFixed(2)}</DishPrice>
      </Link>

      <Includerefec>
        <QuantityControl>
          <button type="button" onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button type="button" onClick={handleIncrease}>+</button>
        </QuantityControl>
        <IncludeButton type="button" onClick={() => quantity > 0 && alert(`Incluído ${quantity} ${title}(s)`)}>
          Incluir
        </IncludeButton>
      </Includerefec>
    </CardContainer>
  );
}