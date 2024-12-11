import { Header } from "../../components/Header/";
import { Footer } from "../../components/Footer/";
import { Container, BackPage, Plate, Text, Tags, Content, IncludeButton, Includerefec, QuantityControl } from "../Details/styles";
import { Tag } from "../../components/Tag";

import salada_g from '../../assets/salada_g.png';
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

export function Details() {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 0 && setQuantity(quantity - 1);
  
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
            <Content>
              <Text>
                <h1>Salada Ravanello</h1>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.<br />O pão naan dá um toque especial.</p>
              </Text>
              <Tags>
                <Tag title={"teste"}/>
                <Tag title={"teste"}/>
                <Tag title={"teste"}/>
                <Tag title={"teste"}/>
                <Tag title={"teste"}/>
                <Tag title={"teste"}/>
              </Tags>

              <Includerefec>
                <QuantityControl>
                  <button  onClick={handleDecrease}>-</button>
                  <span>{quantity}</span>
                  <button onClick={handleIncrease}>+</button>
                </QuantityControl>
                <IncludeButton onClick={() => quantity > 0 && alert(`Incluído ${quantity}`)} disabled={quantity === 0}>
                  Incluir ∙ R$ 25,00
                </IncludeButton>
              </Includerefec>

            </Content>
          </Plate>

        </div>
      </main>
      <Footer />
    </Container>
  );
}
