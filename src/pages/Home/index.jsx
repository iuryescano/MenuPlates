import React, { useRef, useState } from 'react'; 
import { Container, Banner, SvgImage, TextContainer, Title, Description, Refecbox, CardBox, TitleRefec, Arrow, Refecdad } from "./styles";
import { Header } from "../../components/Header/";
import yourSvgImage from '../../assets/maskgroup.png';
import camarao_m from '../../assets/camarao_g.png';
import { Card } from "../../components/Card/";

const cardData = [
  { imageSrc: camarao_m, title: "Teste 1", description: "Teste descricao 1", price: 45 },
  { imageSrc: camarao_m, title: "Teste 2", description: "Teste descricao 2", price: 45 },
  { imageSrc: camarao_m, title: "Teste 3", description: "Teste descricao 3", price: 45 },
  { imageSrc: camarao_m, title: "Teste 4", description: "Teste descricao 4", price: 45 },
  { imageSrc: camarao_m, title: "Teste 5", description: "Teste descricao 5", price: 37 },
  { imageSrc: camarao_m, title: "Teste 6", description: "Teste descricao 6", price: 45 },
];

export function Home() {
  const cardRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  
  const handleScroll = (direction) => {
    if (isScrolling) return;

    const cardWidth = cardRef.current.scrollWidth / cardData.length;
    const newScrollAmount = direction === 'right' 
      ? scrollAmount + cardWidth 
      : scrollAmount - cardWidth;

    setScrollAmount(newScrollAmount);
    setIsScrolling(true);

    const cards = cardRef.current.children;

    for (let card of cards) {
      card.classList.remove('slide-left', 'slide-right');
      if (direction === 'right') {
        card.classList.add('slide-left');
      } else {
        card.classList.add('slide-right');
      }
    }

    cardRef.current.scrollTo({
      left: newScrollAmount,
      behavior: 'smooth',
    });

    setTimeout(() => {
      setIsScrolling(false);
      // Remover classes de animação após a transição
      for (let card of cards) {
        card.classList.remove('slide-left', 'slide-right');
      }
    }, 500); // O tempo deve ser igual ao da transição
  };

  return (
    <Container>
      <Header />
      <main>
        <Banner>
          <SvgImage src={yourSvgImage} alt="Descrição da imagem" />
          <TextContainer>
            <Title>Sabores inigualáveis</Title>
            <Description>Sinta o cuidado do preparo com ingredientes selecionados</Description>
          </TextContainer>
        </Banner>

        <Refecdad>
          <TitleRefec>Refeições</TitleRefec>
          <Refecbox>  
            <CardBox ref={cardRef}>
              <Arrow className="left" onClick={() => handleScroll('left')}>
                &#9664; {/* Seta para a esquerda */}
              </Arrow>

              {cardData.map((card, index) => (
                <Card 
                  key={index} 
                  imageSrc={card.imageSrc} 
                  title={card.title} 
                  description={card.description} 
                  price={card.price} 
                  isVisible={index !== 0 && index !== cardData.length - 1} 
                  animationClass={isScrolling ? (scrollAmount > 0 ? 'slide-left' : 'slide-right') : ''}
                />
              ))}

              <Arrow className="right" onClick={() => handleScroll('right')}>
                &#9654; {/* Seta para a direita */}
              </Arrow>
            </CardBox>
          </Refecbox>
        </Refecdad>
      </main>
    </Container> 
  );
}
