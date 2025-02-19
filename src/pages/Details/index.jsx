import { Header } from "../../components/Header/";
import { Footer } from "../../components/Footer/";
import { Container, BackPage, Plate, Text, Tags, Content, IncludeButton, Includerefec, QuantityControl, EditButton, CardDescription } from "../Details/styles";
import { Tag } from "../../components/Tag";

import salada_g from '../../assets/salada_g.png';
import { IoIosArrowBack } from "react-icons/io";
import { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";

export function Details() {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 0 && setQuantity(quantity - 1);

  const isAdmin = true; // Isso será controlado futuramente via banco de dados

  const params = useParams();

  const [ data, setData ] = useState(null);

  useEffect(() => {
    async function fetchPlate(){
      const response = await api.get(`/plates/${params.id}`)
      setData(response.data);
    }
    
    fetchPlate();
  }, [])

  const imageURL = data?.Image 
  ? `http://localhost:3333/files/${data.Image}` 
  : salada_g; // usa a imagem importada como fallback

  
  
  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <div>
            <Link to={"/"}>
            <BackPage>
              <IoIosArrowBack />
                voltar
            </BackPage>
            </Link>
            
            <Plate>
              <img src={imageURL} alt={data?.Name || "Imagem do prato"} />
              <Content>
                <Text>
                  <h1>{data.Name}</h1>
                  <CardDescription>{description}</CardDescription>
                </Text>
                {
                  data.ingredients &&
                  <Tags>
                    { data.ingredients.map((ingredient, index) => (
                      <Tag 
                        key={ingredient.id ? String(ingredient.id) : index} 
                        title={ingredient.Name}
                      />
                    ))}
                  </Tags>
                }
                { isAdmin ? (
                  <EditButton to={`/editplate/${params.id}`}>
                    Editar
                  </EditButton>
                ):(<Includerefec>
                  <QuantityControl>
                    <button  onClick={handleDecrease}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrease}>+</button>
                  </QuantityControl>
                  <IncludeButton onClick={() => quantity > 0 && alert(`Incluído ${quantity}`)} disabled={quantity === 0}>
                    Incluir ∙ R$ 25,00
                  </IncludeButton>
                </Includerefec>
                ) }

              </Content>
            </Plate>

          </div>
        </main>
      }
      <Footer />
    </Container>
  );
}
