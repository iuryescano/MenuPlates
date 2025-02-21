// Frontend - Home/index.jsx
import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Container, Banner, SvgImage, TextContainer, Title, Description, 
  Refecbox, CardBox, TitleRefec, Arrow, Refecdad, Sobrebox, Sobredad, 
  Drinkdad, Drinkbox, NotFoundMessage
} from "./styles";
import { Header } from "../../components/Header/";
import { Footer } from '../../components/Footer';
import { SideMenu } from '../../components/SideMenu';
import yourSvgImage from '../../assets/maskgroup.png';
import { Card } from "../../components/Card/";
import { api } from '../../services/api';

export function Home() {
  // Recupera o termo de busca do state (se houver)
  const location = useLocation();
  const searchTerm = location.state?.search || "";

  // Se houver searchTerm, vamos fazer uma pesquisa global (ignorando as categorias)
  // Caso contrário, você pode optar por carregar os carrosséis normalmente.
  const [globalPlates, setGlobalPlates] = useState([]);

  // Se não estiver em modo global, os estados para os carrosséis permanecem:
  const [platesRefec, setPlatesRefec] = useState([]);
  const [platesSobremesas, setPlatesSobremesas] = useState([]);
  const [plateBebi, setPlateBebi] = useState([]);

  // Estados para controle de scroll (para os carrosséis, se utilizados)
  const refecRef = useRef(null);
  const sobreRef = useRef(null);
  const drinkRef = useRef(null);
  const [scrollAmountRefec, setScrollAmountRefec] = useState(0);
  const [scrollAmountSobre, setScrollAmountSobre] = useState(0);
  const [scrollAmountDrink, setScrollAmountDrink] = useState(0);
  const [isScrollingRefec, setIsScrollingRefec] = useState(false);
  const [isScrollingSobre, setIsScrollingSobre] = useState(false);
  const [isScrollingDrink, setIsScrollingDrink] = useState(false);

  const searchRef = useRef(null);
  const [scrollAmountSearch, setScrollAmountSearch] = useState(0);
  const [isScrollingSearch, setIsScrollingSearch] = useState(false);

  // Função para rolar o carrossel (mantida para os carrosséis)
  const handleScroll = (direction, ref, scrollAmount, setScrollAmount, setIsScrolling, isScrolling, dataLength) => {
    if (isScrolling) return;
    const cardWidth = ref.current.scrollWidth / dataLength;
    const maxScrollAmount = ref.current.scrollWidth - ref.current.clientWidth;
    const newScrollAmount = direction === 'right'
      ? Math.min(scrollAmount + cardWidth, maxScrollAmount)
      : Math.max(scrollAmount - cardWidth, 0);
    setScrollAmount(newScrollAmount);
    setIsScrolling(true);
    ref.current.scrollTo({ left: newScrollAmount, behavior: 'smooth' });
    setTimeout(() => setIsScrolling(false), 200);
  };

  // Função para truncar texto (opcional)
  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  //Controle de estado para abrir menu no mobile
  const [menuIsOpen, setMenuIsOpen ] = useState(false);

  useEffect(() => {
    async function fetchGlobalPlates() {
      try {
        if (searchTerm) {
          // Faz a primeira requisição buscando pelo nome do prato
          const responseByName = await api.get(`/plates?name=${encodeURIComponent(searchTerm)}`);
  
          if (responseByName.data.length > 0) {
            setGlobalPlates(responseByName.data);
          } else {
            // Se não encontrar pelo nome, busca pelo ingrediente
            const responseByIngredient = await api.get(`/plates?ingredients=${encodeURIComponent(searchTerm)}`);
            setGlobalPlates(responseByIngredient.data);
          }
        } else {
          setGlobalPlates([]);
        }
      } catch (error) {
        console.error("Erro na pesquisa global:", error);
      }
    }
  
    if (searchTerm) {
      fetchGlobalPlates();
    } else {
      async function fetchPlatesByCategory() {
        try {
          const [refecRes, sobreRes, bebiRes] = await Promise.all([
            api.get(`/plates?category=Refeicao`),
            api.get(`/plates?category=Sobremesa`),
            api.get(`/plates?category=Bebidas`)
          ]);
  
          setPlatesRefec(refecRes.data);
          setPlatesSobremesas(sobreRes.data);
          setPlateBebi(bebiRes.data);
        } catch (error) {
          console.error("Erro ao buscar pratos por categoria:", error);
        }
      }
  
      fetchPlatesByCategory();
    }
  }, [searchTerm]);

  return (
    <Container>
      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      <SideMenu menuIsOpen={menuIsOpen} onCloseMenu={()=>setMenuIsOpen(false)}></SideMenu>
      <main>
      {!searchTerm && (
        <Banner>
          <SvgImage src={yourSvgImage} alt="Descrição da imagem" />
          <TextContainer>
            <Title>Sabores inigualáveis</Title>
            <Description>Sinta o cuidado do preparo com ingredientes selecionados</Description>
          </TextContainer>
        </Banner>
      )}

        {/* Seção de resultados da pesquisa */}
        {searchTerm ? (
          <Refecdad>
            <TitleRefec>
              {globalPlates.length > 0 
                ? `Resultados para "${searchTerm}"`
                : `Nada encontrado para "${searchTerm}"`}
            </TitleRefec>
            <Refecbox>
              <CardBox ref={searchRef}>
                {/* Setas mesmo na pesquisa */}
                {globalPlates.length > 4 && (
                  <>
                    <Arrow
                      className="left"
                      onClick={() => handleScroll(
                        'left', 
                        searchRef, 
                        scrollAmountSearch, 
                        setScrollAmountSearch, 
                        setIsScrollingSearch, 
                        isScrollingSearch, 
                        globalPlates.length
                      )}
                    >
                      &#9664;
                    </Arrow>
                    <Arrow
                      className="right"
                      onClick={() => handleScroll(
                        'right', 
                        searchRef, 
                        scrollAmountSearch, 
                        setScrollAmountSearch, 
                        setIsScrollingSearch, 
                        isScrollingSearch, 
                        globalPlates.length
                      )}
                    >
                      &#9654;
                    </Arrow>
                  </>
                )}
                
                {globalPlates.length > 0 ? (
                  globalPlates.map((plate) => (
                    <Card
                      key={String(plate.id)}
                      id={plate.id}
                      title={plate.Name}
                      imageSrc={plate.Image}
                      description={truncateText(plate.Description, 28)}
                      price={typeof plate.Price === 'number' ? plate.Price.toFixed(2) : 'N/A'}
                    />
                  ))
                ) : (
                  <NotFoundMessage>
                    Nenhum prato encontrado. Tente outro termo.
                  </NotFoundMessage>
                )}
              </CardBox>
            </Refecbox>
          </Refecdad>
        ) : (
          // ... restante dos carrosséis originais permanece igual
          // Caso não haja termo de busca, exibe os carrosséis normalmente
          <>
            {platesRefec.length > 0 && (
              <Refecdad>
                <TitleRefec>Refeições</TitleRefec>
                <Refecbox>
                  <CardBox ref={refecRef}>
                    <Arrow
                      className="left"
                      onClick={() => handleScroll('left', refecRef, scrollAmountRefec, setScrollAmountRefec, setIsScrollingRefec, isScrollingRefec, platesRefec.length)}
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
                        price={typeof plate.Price === 'number' ? plate.Price.toFixed(2) : 'N/A'}
                        isVisible={plate.id !== 0 && plate.id !== platesRefec.length - 1}
                        animationClass={isScrollingRefec ? (scrollAmountRefec > 0 ? 'slide-left' : 'slide-right') : ''}
                      />
                    ))}
                    <Arrow
                      className="right"
                      onClick={() => handleScroll('right', refecRef, scrollAmountRefec, setScrollAmountRefec, setIsScrollingRefec, isScrollingRefec, platesRefec.length)}
                    >
                      &#9654;
                    </Arrow>
                  </CardBox>
                </Refecbox>
              </Refecdad>
            )}
  
            {platesSobremesas.length > 0 && (
              <Sobredad>
                <TitleRefec>Sobremesas</TitleRefec>
                <Sobrebox>
                  <CardBox ref={sobreRef}>
                    <Arrow
                      className="left"
                      onClick={() => handleScroll('left', sobreRef, scrollAmountSobre, setScrollAmountSobre, setIsScrollingSobre, isScrollingSobre, platesSobremesas.length)}
                    >
                      &#9664;
                    </Arrow>
                    {platesSobremesas.map((plate) => (
                      <Card
                        key={String(plate.id)}
                        id={plate.id}
                        title={plate.Name}
                        imageSrc={plate.Image}
                        description={plate.Description}
                        price={typeof plate.Price === 'number' ? plate.Price.toFixed(2) : 'N/A'}
                        isVisible={plate.id !== 0 && plate.id !== platesSobremesas.length - 1}
                        animationClass={isScrollingSobre ? (scrollAmountSobre > 0 ? 'slide-left' : 'slide-right') : ''}
                      />
                    ))}
                    <Arrow
                      className="right"
                      onClick={() => handleScroll('right', sobreRef, scrollAmountSobre, setScrollAmountSobre, setIsScrollingSobre, isScrollingSobre, platesSobremesas.length)}
                    >
                      &#9654;
                    </Arrow>
                  </CardBox>
                </Sobrebox>
              </Sobredad>
            )}
  
            {plateBebi.length > 0 && (
              <Drinkdad>
                <TitleRefec>Bebidas</TitleRefec>
                <Drinkbox>
                  <CardBox ref={drinkRef}>
                    <Arrow
                      className="left"
                      onClick={() => handleScroll('left', drinkRef, scrollAmountDrink, setScrollAmountDrink, setIsScrollingDrink, isScrollingDrink, plateBebi.length)}
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
                        price={typeof plate.Price === 'number' ? plate.Price.toFixed(2) : 'N/A'}
                        isVisible={plate.id !== 0 && plate.id !== plateBebi.length - 1}
                        animationClass={isScrollingDrink ? (scrollAmountDrink > 0 ? 'slide-left' : 'slide-right') : ''}
                      />
                    ))}
                    <Arrow
                      className="right"
                      onClick={() => handleScroll('right', drinkRef, scrollAmountDrink, setScrollAmountDrink, setIsScrollingDrink, isScrollingDrink, plateBebi.length)}
                    >
                      &#9654;
                    </Arrow>
                  </CardBox>
                </Drinkbox>
              </Drinkdad>
            )}
          </>
        )}
      </main>
      <Footer />
    </Container>
  );
}
