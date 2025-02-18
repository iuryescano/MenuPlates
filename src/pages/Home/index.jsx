import React, { useRef, useState, useEffect } from 'react'; 
import { Container, Banner, SvgImage, TextContainer, Title, Description, Refecbox, CardBox, TitleRefec, Arrow, Refecdad, Sobrebox, Sobredad, Drinkdad, Drinkbox } from "./styles";
import { Header } from "../../components/Header/";
import { Footer } from '../../components/Footer';
import yourSvgImage from '../../assets/maskgroup.png';
import camarao_m from '../../assets/camarao_g.png';
import doce_m from '../../assets/doce_m.png';
import drink_m from '../../assets/drink_m.png';
import { Card } from "../../components/Card/";
import { api } from '../../services/api';

// Dados para os cards de refeições, sobremesas e bebidas
const cardData = [
  { imageSrc: camarao_m, title: "Teste 1", description: "Teste descricao 1", price: 45 },
  { imageSrc: camarao_m, title: "Teste 2", description: "Teste descricao 2", price: 45 },
  { imageSrc: camarao_m, title: "Teste 3", description: "Teste descricao 3", price: 45 },
  { imageSrc: camarao_m, title: "Teste 4", description: "Teste descricao 4", price: 45 },
  { imageSrc: camarao_m, title: "Teste 5", description: "Teste descricao 5", price: 37 },
  { imageSrc: camarao_m, title: "Teste 6", description: "Teste descricao 6", price: 45 },
];

const cardDataSobre = [
  { imageSrc: doce_m, title: "Teste 1", description: "Teste descricao 1", price: 45 },
  { imageSrc: doce_m, title: "Teste 2", description: "Teste descricao 2", price: 45 },
  { imageSrc: doce_m, title: "Teste 3", description: "Teste descricao 3", price: 45 },
  { imageSrc: doce_m, title: "Teste 4", description: "Teste descricao 4", price: 45 },
  { imageSrc: doce_m, title: "Teste 5", description: "Teste descricao 5", price: 37 },
  { imageSrc: doce_m, title: "Teste 6", description: "Teste descricao 6", price: 45 },
];

const cardDataDrink = [
  { imageSrc: drink_m, title: "Drink 1", description: "Descrição drink 1", price: 15 },
  { imageSrc: drink_m, title: "Drink 2", description: "Descrição drink 2", price: 20 },
  { imageSrc: drink_m, title: "Drink 3", description: "Descrição drink 3", price: 25 },
  { imageSrc: drink_m, title: "Drink 4", description: "Descrição drink 4", price: 18 },
  { imageSrc: drink_m, title: "Drink 5", description: "Descrição drink 5", price: 22 },
  { imageSrc: drink_m, title: "Drink 6", description: "Descrição drink 6", price: 20 },
];

export function Home() {
  // Referências separadas para cada carrossel
  const refecRef = useRef(null);
  const sobreRef = useRef(null);
  const drinkRef = useRef(null);  // Referência para o carrossel de bebidas
  
  

  // Estados separados para cada carrossel
  const [scrollAmountRefec, setScrollAmountRefec] = useState(0);
  const [scrollAmountSobre, setScrollAmountSobre] = useState(0);
  const [scrollAmountDrink, setScrollAmountDrink] = useState(0);  // Estado para o carrossel de bebidas
  const [isScrollingRefec, setIsScrollingRefec] = useState(false);
  const [isScrollingSobre, setIsScrollingSobre] = useState(false);
  const [isScrollingDrink, setIsScrollingDrink] = useState(false);  // Estado para verificar se o carrossel de bebidas está rolando

  const [ plates, setPlates ] = useState([]);

  



  // Função para rolar o carrossel
const handleScroll = (direction, ref, scrollAmount, setScrollAmount, setIsScrolling, isScrolling, dataLength) => {
  if (isScrolling) return;

  const cardWidth = ref.current.scrollWidth / dataLength;
  const maxScrollAmount = ref.current.scrollWidth - ref.current.clientWidth;
  const newScrollAmount = direction === 'right' 
    ? Math.min(scrollAmount + cardWidth, maxScrollAmount)
    : Math.max(scrollAmount - cardWidth, 0);

  setScrollAmount(newScrollAmount);
  setIsScrolling(true);

  ref.current.scrollTo({
    left: newScrollAmount,
    behavior: 'smooth',
  });

  setTimeout(() => setIsScrolling(false), 200);
};

useEffect(() => {
  async function fetchPlate() {
      try {
          const response = await api.get(`/plates?category=Refeicao`);
          setPlates(response.data);
      } catch (error) {
          console.error("Erro ao buscar pratos:", error);
      }
  }
  fetchPlate();
}, [plates]);

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

        {/* Carrossel de Refeições */}
        <Refecdad>
          <TitleRefec>Refeições</TitleRefec>
          <Refecbox>  
            <CardBox ref={refecRef}>
              <Arrow className="left" onClick={() => handleScroll('left', refecRef, scrollAmountRefec, setScrollAmountRefec, setIsScrollingRefec, isScrollingRefec, cardData.length)}>
                &#9664; {/* Seta para a esquerda */}
              </Arrow>

              {plates.map(plates => (
                  <Card 
                    key={String(plates.id)} 
                    title={plates.Name}
                    imageSrc={image} 
                    description={plates.Description}
                    price={typeof plates.Price === 'number' ? plates.Price.toFixed(2) : 'N/A'} // Verificação para garantir que price é um número
                    isVisible={plates.id !== 0 && plates.id !== cardData.length - 1} 
                    animationClass={isScrollingRefec ? (scrollAmountRefec > 0 ? 'slide-left' : 'slide-right') : ''}
                  />
                ))
              }

              <Arrow className="right" onClick={() => handleScroll('right', refecRef, scrollAmountRefec, setScrollAmountRefec, setIsScrollingRefec, isScrollingRefec, cardData.length)}>
                &#9654; {/* Seta para a direita */}
              </Arrow>
            </CardBox>
          </Refecbox>
        </Refecdad>

        {/* Carrossel de Sobremesas */}
        <Sobredad>
          <TitleRefec>Sobremesas</TitleRefec>
          <Sobrebox>  
            <CardBox ref={sobreRef}>
              <Arrow className="left" onClick={() => handleScroll('left', sobreRef, scrollAmountSobre, setScrollAmountSobre, setIsScrollingSobre, isScrollingSobre, cardDataSobre.length)}>
                &#9664; {/* Seta para a esquerda */}
              </Arrow>

              {cardDataSobre.map((card, index) => (
                <Card 
                  key={index} 
                  imageSrc={card.imageSrc} 
                  title={card.title} 
                  description={card.description} 
                  price={card.price} 
                  isVisible={index !== 0 && index !== cardDataSobre.length - 1} 
                  animationClass={isScrollingSobre ? (scrollAmountSobre > 0 ? 'slide-left' : 'slide-right') : ''}
                />
              ))}

              <Arrow className="right" onClick={() => handleScroll('right', sobreRef, scrollAmountSobre, setScrollAmountSobre, setIsScrollingSobre, isScrollingSobre, cardDataSobre.length)}>
                &#9654; {/* Seta para a direita */}
              </Arrow>
            </CardBox>
          </Sobrebox>
        </Sobredad>

        {/* Carrossel de Bebidas */}
        <Drinkdad>
          <TitleRefec>Bebidas</TitleRefec>
          <Drinkbox>  
            <CardBox ref={drinkRef}>
              <Arrow className="left" onClick={() => handleScroll('left', drinkRef, scrollAmountDrink, setScrollAmountDrink, setIsScrollingDrink, isScrollingDrink, cardDataDrink.length)}>
                &#9664; {/* Seta para a esquerda */}
              </Arrow>

              {cardDataDrink.map((card, index) => (
                <Card 
                  key={index} 
                  imageSrc={card.imageSrc} 
                  title={card.title} 
                  description={card.description} 
                  price={card.price} 
                  isVisible={index !== 0 && index !== cardDataDrink.length - 1} 
                  animationClass={isScrollingDrink ? (scrollAmountDrink > 0 ? 'slide-left' : 'slide-right') : ''}
                />
              ))}

              <Arrow className="right" onClick={() => handleScroll('right', drinkRef, scrollAmountDrink, setScrollAmountDrink, setIsScrollingDrink, isScrollingDrink, cardDataDrink.length)}>
                &#9654; {/* Seta para a direita */}
              </Arrow>
            </CardBox>
          </Drinkbox>
        </Drinkdad>
        
        
      </main>
      <Footer />
    </Container> 
  );
}
