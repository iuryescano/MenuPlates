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
  Buttons,
  CategoryWrapper
} from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { Header } from "../../components/Header/";
import { PlateItem } from "../../components/PlateItem/";
import { Footer } from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api"; // Importe o serviço de API

export function NewPlate() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(""); // Nome do prato
  const [ingredients, setIngredients] = useState([]); // Lista de ingredientes
  const [newIngredient, setNewIngredient] = useState(""); // Input temporário para novo ingrediente
  const [category, setCategory] = useState(""); // Certifique-se de que é uma string
  const [price, setPrice] = useState(""); // Preço do prato
  const [description, setDescription] = useState(""); // Descrição do prato

  const navigate = useNavigate(); // Hook para navegação

  // Obtenha o user_id do localStorage
  const user = JSON.parse(localStorage.getItem("@MenuPlate:user"));
  const user_id = user ? user.id : null;

  // Função para lidar com o upload da imagem
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file); // Armazena o arquivo de imagem
    }
  };

  // Adicionar novo ingrediente
  const handleAddIngredient = () => {
    if (newIngredient.trim() === "") return; // Evita valores vazios
    setIngredients((prevState) => [...prevState, newIngredient]); // Adiciona ingrediente
    setNewIngredient(""); // Reseta o campo input
  };

  // Remover ingrediente da lista pelo índice
  const handleRemoveIngredient = (index) => {
    setIngredients((prevState) => prevState.filter((_, i) => i !== index));
  };

  // Função para salvar o prato no banco de dados
  const handleNewPlate = async () => {
    if (!name || !category || !price || !description || ingredients.length === 0) {
      alert("Preencha todos os campos!");
      return;
    }
  
    try {
      // Envia um valor padrão para Image, pois a imagem será atualizada posteriormente
      const response = await api.post(`/plates/${user_id}`, {
        Name: name,
        Image: image ? image.name : "default.jpg", // ou use "" se preferir
        Price: price,
        Description: description,
        category: [category],  // Lembre-se de enviar a categoria como array
        ingredients
      });
  
      const plateId = response.data.id;
  
      // Se houver imagem selecionada, atualiza-a com o PATCH
      if (image) {
        const formData = new FormData();
        formData.append("plateimage", image);
        formData.append("plate_id", plateId);
  
        await api.patch("/plates/image", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
      }
  
      alert("Prato cadastrado com sucesso!");
      navigate("/"); // Redireciona para a página inicial
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao cadastrar prato, tente novamente!");
      }
    }
  };

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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Name>
            <CategoryWrapper>
              <p>Categoria</p>
              <select value={category} onChange={e => setCategory(e.target.value)}>
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
              <input 
                type="number" 
                placeholder="R$ 0.00" 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Price>
          </Flex>
          <Description>
            <p>Descrição</p>
            <textarea 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Description>

          <Buttons>
            <SaveButton onClick={handleNewPlate}>Salvar Alterações</SaveButton>
          </Buttons>
        </Content>
      </main>
      <Footer /> {/* Fixo no final */}
    </Container>
  );
}