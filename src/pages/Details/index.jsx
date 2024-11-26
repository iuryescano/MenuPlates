import { Header } from "../../components/Header/";
import { Footer } from "../../components/Footer/";
import { Container, BackPage, Plate, Text } from "../Details/styles";

import salada_g from '../../assets/salada_g.png';
import { IoIosArrowBack } from "react-icons/io";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <div>
          <BackPage>
            <IoIosArrowBack />
            voltar
          </BackPage>
          <Plate>
            <img src={salada_g} alt="salada" />
            <Text>
              <h1>Salada Ravanello</h1>
              <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.<br />O pão naan dá um toque especial.</p>
            </Text>
          </Plate>
        </div>
      </main>
      <Footer />
    </Container>
  );
}
