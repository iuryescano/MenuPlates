import { Container, Banner, SvgImage, TextContainer, Title, Description, Refecbox, CardBox,  TitleRefec } from "./styles";
import { Header } from "../../components/Header/";
import yourSvgImage from '../../assets/maskgroup.png'; // Altere para o caminho correto da sua imagem SVG
import camarao_m from '../../assets/camarao_g.png'
import { Card } from "../../components/Card/";

export function Home() {
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
        
        <Refecbox>
          <TitleRefec>Refeições</TitleRefec>
          <CardBox>
            <Card imageSrc={camarao_m} title = {"Teste"} description= {"Teste descricao"} price={45}></Card>
            <Card imageSrc={camarao_m} title = {"Teste"} description= {"Teste descricao"} price={45}></Card>
          </CardBox>
        </Refecbox>

      </main>
    </Container>
  );
}