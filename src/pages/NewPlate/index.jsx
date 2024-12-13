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
  CategoryWrapper
} from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { Header } from "../../components/Header/";
import { Footer } from "../../components/Footer";

export function NewPlate() {
  const [image, setImage] = useState(null);

  // Função para lidar com o upload da imagem
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Cria uma URL temporária para a imagem
    }
  };

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
        </Content>
      </main>
      <Footer /> {/* Fixo no final */}
    </Container>
  );
}
