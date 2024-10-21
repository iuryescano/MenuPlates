import { Container, Banner, SvgImage, TextContainer, Title, Description, Refecbox, TitleRefec } from "./styles";
import { Header } from "../../components/Header/";
import yourSvgImage from '../../assets/maskgroup.png'; // Altere para o caminho correto da sua imagem SVG

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
          <TitleRefec font-size={"10px"}>Refeições</TitleRefec>
        </Refecbox>

      </main>
    </Container>
  );
}