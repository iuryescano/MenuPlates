import React, { useState, useEffect } from "react";
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
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

export function EditPlate() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(""); // Nome do prato
  const [ingredients, setIngredients] = useState([]); // Lista de ingredientes
  const [newIngredient, setNewIngredient] = useState(""); // Input temporário para novo ingrediente
  const [category, setCategory] = useState(""); // Certifique-se de que é uma string
  const [price, setPrice] = useState(""); // Preço do prato
  const [description, setDescription] = useState(""); // Descrição do prato
  const [plateId, setPlateId] = useState(null); // ID do prato

  const navigate = useNavigate(); // Hook para navegação
  const { id } = useParams(); // Obter o ID do prato a partir dos parâmetros da URL

  useEffect(() => {
    // Definir o ID do prato
    setPlateId(id);

    // Carregar os dados do prato para edição
    async function fetchPlate() {
      try {
        const response = await api.get(`/plates/${id}`);
        const plate = response.data;

        setName(plate.Name);
        setCategory(plate.category && plate.category.length > 0 ? plate.category[0] : ""); // Verificação robusta para categoria
        setPrice(plate.Price);
        setDescription(plate.Description);
        setIngredients(plate.ingredients.map(ingredient => ingredient.Name) || []); // Verificação robusta para ingredientes
        setImage(plate.Image);
      } catch (error) {
        console.error("Erro ao carregar os dados do prato:", error);
      }
    }

    fetchPlate();
  }, [id]);

  async function handleRemove() {
    const confirm = window.confirm("Deseja Realmente Remover o Prato?")

    if(confirm) {
      await api.delete(`/plates/${id}`)
      window.alert("Prato Apagado com sucesso")
      navigate("/");
    }
  }

  // Função para lidar com o upload da imagem
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file); // Armazena o arquivo da imagem
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

  const handleEditPlate = async () => {
    if (!category || !image ) {
      alert("Preencha a categoria e a imagem");
      return;
    }

    try {
      // Envia um valor padrão para Image, pois a imagem será atualizada posteriormente
      const response = await api.put(`/plates/${id}`, {
        Name: name,
        Image: image ? image.name : "default.jpg", // ou use "" se preferir
        Price: price,
        Description: description,
        category: [category],  // Lembre-se de enviar a categoria como array
        ingredients
      });

      const updatedPlateId = response.data.id;

      // Se houver imagem selecionada, atualiza-a com o PATCH
      if (image) {
        const formData = new FormData();
        formData.append("plateimage", image);
        formData.append("plate_id", updatedPlateId);

        await api.patch("/plates/image", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
      }

      alert("Prato editado com sucesso!");
      navigate("/"); // Redireciona para a página inicial
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao editar prato, tente novamente!");
        console.log(error);
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
          <H1>Editar prato</H1>
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
                <option value="Bebidas">Sucos</option>
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
            <DeletePlate onClick={handleRemove}>Apagar Prato</DeletePlate>
            <SaveButton onClick={handleEditPlate}>Salvar Alterações</SaveButton>
          </Buttons>
        </Content>
      </main>
      <Footer /> {/* Fixo no final */}
    </Container>
  );
}