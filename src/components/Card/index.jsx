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
import { Link } from "react-router-dom";

export function Card({ id, imageSrc, title, description, price, isVisible, animationClass }) {
  const [quantity, setQuantity] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 0 && setQuantity(quantity - 1);

  const toggleFavorite = () => setIsFavorited(!isFavorited);

  const isAdmin = true; // Esse valor pode vir do contexto do usuário

  const imageURL = imageSrc 
    ? `http://localhost:3333/files/${imageSrc}` 
    : "URL-de-um-placeholder.png";

  return (
    <CardContainer className={animationClass} >
      {isAdmin ? (
        <FavoriteIcon>
          {/* Redireciona para a página de edição passando o id do prato */}
          <Link to={`/editplate/${id}`}>
            <PiPencilSimple />
          </Link>
        </FavoriteIcon>
      ) : (      
        <FavoriteIcon onClick={toggleFavorite} $isFavorited={isFavorited}>
          <FaHeart />
        </FavoriteIcon>
      )}

      {/* Área que navega para a página de detalhes */}
      <Link to={`/details/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <DishImage src={imageURL} alt={title} />
        <DishTitle>{title}</DishTitle>
        <DishDescription>{description}</DishDescription>
        <DishPrice>R$ {price}</DishPrice>
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
