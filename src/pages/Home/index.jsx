import React, { useRef, useState, useEffect } from 'react'; 
import { 
  Container, 
  Banner, 
  SvgImage, 
  TextContainer, 
  Title, 
  Description, 
  Refecbox, 
  CardBox, 
  TitleRefec, 
  Arrow, 
  Refecdad, 
  Sobrebox, 
  Sobredad, 
  Drinkdad, 
  Drinkbox 
} from "./styles";
import { Header } from "../../components/Header/";
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';
import yourSvgImage from '../../assets/maskgroup.png';
import { Card } from "../../components/Card/";
import { api } from '../../services/api';

export function Home() {
  // Referências para cada carrossel
  const refecRef = useRef(null);
  const sobreRef = useRef(null);
  const drinkRef = useRef(null);

  // Estados para controle de scroll
  const [scrollAmountRefec, setScrollAmountRefec] = useState(0);
  const [scrollAmountSobre, setScrollAmountSobre] = useState(0);
  const [scrollAmountDrink, setScrollAmountDrink] = useState(0);
  const [isScrollingRefec, setIsScrollingRefec] = useState(false);
  const [isScrollingSobre, setIsScrollingSobre] = useState(false);
  const [isScrollingDrink, setIsScrollingDrink] = useState(false);

  // Estados para armazenar os dados dos pratos
  const [platesRefec, setPlatesRefec] = useState([]);
  const [platesSobre, setPlatesSobremesas] = useState([]);
  const [plateBebi, setPlateBebi] = useState([]);

  // Função para rolar o carrossel
  const handleScroll = (
    direction,
    ref,
    scrollAmount,
    setScrollAmount,
    setIsScrolling,
    isScrolling,
    dataLength
  ) => {
    if (isScrolling) return;

    const cardWidth = ref.current.scrollWidth / dataLength;
    const maxScrollAmount = ref.current.scrollWidth - ref.current.clientWidth;
    const newScrollAmount =
      direction === 'right'
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

    async function fetchPlateBebi() {
      try {
        const response = await api.get(`/plates?category=Bebidas`);
        setPlateBebi(response.data);
      } catch (error) {
        console.error("Erro ao buscar pratos:", error);
      }
    }

    fetchPlateRefeic();
    fetchPlateSobre();
    fetchPlateBebi();
  }, []); // Executa apenas uma vez ao montar o componente

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
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

        {/* Carrossel de Refeições */}
        <Refecdad>
          <TitleRefec>Refeições</TitleRefec>
          <Refecbox>
            <CardBox ref={refecRef}>
              <Arrow
                className="left"
                onClick={() =>
                  handleScroll(
                    'left',
                    refecRef,
                    scrollAmountRefec,
                    setScrollAmountRefec,
                    setIsScrollingRefec,
                    isScrollingRefec,
                    platesRefec.length
                  )
                }
              >
                &#9664;
              </Arrow>

              {platesRefec.map((plate) => (
                <Card
                  key={String(plate.id)}
                  id={plate.id}
                  title={plate.Name}
                  imageSrc={plate.Image}
                  description={truncateText(plate.Description, 28)}
                  price={
                    typeof plate.Price === 'number'
                      ? plate.Price.toFixed(2)
                      : 'N/A'
                  }
                  isVisible={
                    plate.id !== 0 && plate.id !== platesRefec.length - 1
                  }
                  animationClass={
                    isScrollingRefec
                      ? scrollAmountRefec > 0
                        ? 'slide-left'
                        : 'slide-right'
                      : ''
                  }
                />
              ))}

              <Arrow
                className="right"
                onClick={() =>
                  handleScroll(
                    'right',
                    refecRef,
                    scrollAmountRefec,
                    setScrollAmountRefec,
                    setIsScrollingRefec,
                    isScrollingRefec,
                    platesRefec.length
                  )
                }
              >
                &#9654;
              </Arrow>
            </CardBox>
          </Refecbox>
        </Refecdad>

        {/* Carrossel de Sobremesas */}
        <Sobredad>
          <TitleRefec>Sobremesas</TitleRefec>
          <Sobrebox>
            <CardBox ref={sobreRef}>
              <Arrow
                className="left"
                onClick={() =>
                  handleScroll(
                    'left',
                    sobreRef,
                    scrollAmountSobre,
                    setScrollAmountSobre,
                    setIsScrollingSobre,
                    isScrollingSobre,
                    platesSobre.length
                  )
                }
              >
                &#9664;
              </Arrow>

              {platesSobre.map((plate) => (
                <Card
                  key={String(plate.id)}
                  id={plate.id}
                  title={plate.Name}
                  imageSrc={plate.Image}
                  description={plate.Description}
                  price={
                    typeof plate.Price === 'number'
                      ? plate.Price.toFixed(2)
                      : 'N/A'
                  }
                  isVisible={
                    plate.id !== 0 && plate.id !== platesSobre.length - 1
                  }
                  animationClass={
                    isScrollingSobre
                      ? scrollAmountSobre > 0
                        ? 'slide-left'
                        : 'slide-right'
                      : ''
                  }
                />
              ))}

              <Arrow
                className="right"
                onClick={() =>
                  handleScroll(
                    'right',
                    sobreRef,
                    scrollAmountSobre,
                    setScrollAmountSobre,
                    setIsScrollingSobre,
                    isScrollingSobre,
                    platesSobre.length
                  )
                }
              >
                &#9654;
              </Arrow>
            </CardBox>
          </Sobrebox>
        </Sobredad>

        {/* Carrossel de Bebidas */}
        <Drinkdad>
          <TitleRefec>Bebidas</TitleRefec>
          <Drinkbox>
            <CardBox ref={drinkRef}>
              <Arrow
                className="left"
                onClick={() =>
                  handleScroll(
                    'left',
                    drinkRef,
                    scrollAmountDrink,
                    setScrollAmountDrink,
                    setIsScrollingDrink,
                    isScrollingDrink,
                    plateBebi.length
                  )
                }
              >
                &#9664;
              </Arrow>

              {plateBebi.map((plate) => (
                <Card
                  key={String(plate.id)}
                  id={plate.id}
                  title={plate.Name}
                  imageSrc={plate.Image}
                  description={plate.Description}
                  price={
                    typeof plate.Price === 'number'
                      ? plate.Price.toFixed(2)
                      : 'N/A'
                  }
                  isVisible={
                    plate.id !== 0 && plate.id !== plateBebi.length - 1
                  }
                  animationClass={
                    isScrollingDrink
                      ? scrollAmountDrink > 0
                        ? 'slide-left'
                        : 'slide-right'
                      : ''
                  }
                />
              ))}

              <Arrow
                className="right"
                onClick={() =>
                  handleScroll(
                    'right',
                    drinkRef,
                    scrollAmountDrink,
                    setScrollAmountDrink,
                    setIsScrollingDrink,
                    isScrollingDrink,
                    plateBebi.length
                  )
                }
              >
                &#9654;
              </Arrow>
            </CardBox>
          </Drinkbox>
        </Drinkdad>
      </main>
      <Footer />
    </Container>
  );
}
