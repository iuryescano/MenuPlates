import React, { useRef, useState, useEffect } from 'react'; 
import { Container, Banner, SvgImage, TextContainer, Title, Description, Refecbox, CardBox, TitleRefec, Arrow, Refecdad, Sobrebox, Sobredad, Drinkdad, Drinkbox } from "./styles";
import { Header } from "../../components/Header/";
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom'; // Importando Link
import yourSvgImage from '../../assets/maskgroup.png';
import { Card } from "../../components/Card/";
import { api } from '../../services/api';


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

  const [ platesRefec, setPlatesRefec ] = useState([]);
  const [ platesSobre, setPlatesSobremesas] = useState([]);
  const [ plateBebi, setPlateBebi ] = useState([]);



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
  async function fetchPlateRefeic() {
      try {
          const response = await api.get(`/plates?category=Refeicao`);
          setPlatesRefec(response.data);
      } catch (error) {
          console.error("Erro ao buscar pratos:", error);
      }
  }

  async function fetchPlateSobre() {
    try {
        const response = await api.get(`/plates?category=Sobremesa`);
        setPlatesSobremesas(response.data);
    } catch (error) {
        console.error("Erro ao buscar pratos:", error);
    }
}

  async function fetchPlateBebi(){
    try {
      const response = await api.get(`/plates?category=Bebidas`);
      setPlateBebi(response.data);
    } catch (error) {
        console.error("Erro ao buscar pratos:", error);
    }
  }

  fetchPlateBebi()
  fetchPlateSobre()
  fetchPlateRefeic()
}, [platesRefec, platesSobre]);




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

              {platesRefec.map(platesRefec => (
                
                  <Card 
                    key={String(platesRefec.id)}
                    id={platesRefec.id}
                    title={platesRefec.Name}
                    onClick={() => handleDetails(platesRefec.id)}
                    imageSrc={platesRefec.Image} 
                    description={platesRefec.Description}
                    price={typeof platesRefec.Price === 'number' ? platesRefec.Price.toFixed(2) : 'N/A'} // Verificação para garantir que price é um número
                    isVisible={platesRefec.id !== 0 && platesRefec.id !== platesRefec.length - 1} 
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

                {platesSobre.map(platesSobre => (
                    <Card 
                      key={String(platesSobre.id)} 
                      id={platesSobre.id}
                      title={platesSobre.Name}
                      imageSrc={platesSobre.Image} 
                      description={platesSobre.Description}
                      price={typeof platesSobre.Price === 'number' ? platesSobre.Price.toFixed(2) : 'N/A'} // Verificação para garantir que price é um número
                      isVisible={platesSobre.id !== 0 && platesSobre.id !== platesSobre.length - 1} 
                      animationClass={isScrollingRefec ? (scrollAmountRefec > 0 ? 'slide-left' : 'slide-right') : ''}
                    />
                  ))
                }

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

              {plateBebi.map(plateBebi => (
                    <Card 
                      key={String(plateBebi.id)} 
                      id={plateBebi.id}
                      title={plateBebi.Name}
                      imageSrc={plateBebi.Image} 
                      description={plateBebi.Description}
                      price={typeof plateBebi.Price === 'number' ? plateBebi.Price.toFixed(2) : 'N/A'} // Verificação para garantir que price é um número
                      isVisible={plateBebi.id !== 0 && plateBebi.id !== plateBebi.length - 1} 
                      animationClass={isScrollingRefec ? (scrollAmountRefec > 0 ? 'slide-left' : 'slide-right') : ''}
                    />
                  ))
              }


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
