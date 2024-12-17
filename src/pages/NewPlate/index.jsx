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
  CategoryWrapper
} from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { Header } from "../../components/Header/";
import { PlateItem } from "../../components/PlateItem/";
import { Footer } from "../../components/Footer";

export function NewPlate() {
  const [image, setImage] = useState(null);

  const [ingredients, setIngredients] = useState([]); // Lista de ingredientes
  const [newIngredient, setNewIngredient] = useState(""); // Input temporário para novo ingrediente

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

  return (
    <Container>
      <Header /> {/* Fixo no topo */}
      <main>
        <Content>
          <BackPage>
            <IoIosArrowBack />
            voltar
          </BackPage>
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
              <input type="text" placeholder="Ex.: Salada Ceasar" />
            </Name>
            <CategoryWrapper>
              <p>Categoria</p>
              <select>
                <option value="">Selecione uma categoria</option>
                <option value="Refeicao">Refeição</option>
                <option value="Sobremesa">Sobremesa</option>
                <option value="Sucos">Sucos</option>
              </select>
            </CategoryWrapper>
          </Flex>

          {/* Tags para ingredientes */}
          <Tags>
            <p>Ingredientes</p>
            <div className="tags">
              {/* Renderiza a lista de ingredientes */}
              {ingredients.map((ingredient, index) => (
                <PlateItem
                  key={index}
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(index)}
                />
              ))}

              {/* Campo para adicionar novos ingredientes */}
              <PlateItem
                isNew
                placeholder="Adicionar"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />

            </div>
          </Tags>
        </Content>
      </main>
      <Footer /> {/* Fixo no final */}
    </Container>
  );
}
