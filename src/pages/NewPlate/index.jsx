import React, { useState } from "react";
import { 
  Container, 
  Content, 
  BackPage, 
  H1, 
  ImageUploadSection, 
  InputFile, 
  Name, 
  Flex, 
  Tags,
  Price,
  Description,
  SaveButton,
  DeletePlate,
  Buttons,
  CategoryWrapper
} from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { Header } from "../../components/Header/";
import { PlateItem } from "../../components/PlateItem/";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function NewPlate() {
  const [image, setImage] = useState(null);

  const [ingredients, setIngredients] = useState([]); // Lista de ingredientes
  const [newIngredient, setNewIngredient] = useState(""); // Input temporário para novo ingrediente

  const [title, setTitle] = useState(""); // Nome do prato
  const [category, setCategory] = useState(""); // Categoria do prato
  const [price, setPrice] = useState(""); // Preço do prato
  const [description, setDescription] = useState(""); // Descrição do prato

  const navigate = useNavigate();
  
  // Obtenha o user_id do localStorage
  const user = JSON.parse(localStorage.getItem("@MenuPlate:user"));
  const user_id = user ? user.id : null;

  // Função para lidar com o upload da imagem
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Cria uma URL temporária para a imagem
    }
  };

  // Adicionar novo ingrediente
  function handleAddIngredient() {
    if (newIngredient.trim() === "") return; // Evita valores vazios
    setIngredients((prevState) => [...prevState, newIngredient]); // Adiciona ingrediente
    setNewIngredient(""); // Reseta o campo input
  }

  // Remover ingrediente da lista pelo índice
  function handleRemoveIngredient(index) {
    setIngredients((prevState) => prevState.filter((_, i) => i !== index));
  }

  async function handleNewPlate() {
    await api.post(`/plates/${user_id}`, {
      Name,
      price,
      image,
      description,
      category,
      ingredients
    });

    alert ("Prato cadastrado com sucesso!");
    navigate("/");
  }

  return (
    <Container>
      <Header /> {/* Fixo no topo */}
      <main>
        <Content>
          <Link to={"/"}>
            <BackPage>
              <IoIosArrowBack />
              voltar
            </BackPage>
          </Link>
          <H1>Adicionar prato</H1>
          <Flex>
            <ImageUploadSection>
              <p>Imagem do prato</p>
              <label htmlFor="fileUpload">
                <MdOutlineFileUpload size={"1.5rem"} />
                <span>Selecione imagem</span>
                <InputFile 
                  id="fileUpload" 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload} 
                />
              </label>
            </ImageUploadSection>
            <Name>
              <p>Nome</p>
              <input 
                type="text"  
                placeholder="Ex.: Salada Ceasar" 
                onChange={e => setTitle(e.target.value)}/>
            </Name>
            <CategoryWrapper>
              <p>Categoria</p>
              <select onChange={e => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Refeicao">Refeição</option>
                <option value="Sobremesa">Sobremesa</option>
                <option value="Sucos">Sucos</option>
              </select>
            </CategoryWrapper>
          </Flex>

          {/* Tags para ingredientes */}
          <Flex>
            <Tags>
              <p>Ingredientes</p>
              <div className="tags-and-price">
                {/* Tags de ingredientes */}
                <div className="tags">
                  {ingredients.map((ingredient, index) => (
                    <PlateItem
                      key={index}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(index)}
                    />
                  ))}

                  {/* Input para adicionar novo ingrediente */}
                  <PlateItem
                    isNew
                    placeholder="Adicionar"
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredient}
                  />
                </div>
              </div>
            </Tags>
            <Price>
              <p>Preço</p>
              <input type="number" placeholder="R$ 0.00" />
            </Price>
          </Flex>
          <Description>
            <p>Descrição</p>
            <textarea 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
              onChange={e => setDescription(e.target.value)}
              />
          </Description>

          <Buttons onClick={handleNewPlate}>
            <SaveButton>Salvar Alterações</SaveButton>
          </Buttons>
        </Content>
      </main>
      <Footer /> {/* Fixo no final */}
    </Container>
  );
}