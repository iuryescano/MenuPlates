import React from "react";
import { Container, Content, BackPage, H1, ImageUploadSection, InputFile, PreviewImage } from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { Header } from "../../components/Header/";
import { Footer } from "../../components/Footer";
import { useState } from "react";

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
          
          <ImageUploadSection>
            <p>Imagem do prato</p>
            <label htmlFor="fileUpload">
              <MdOutlineFileUpload size={"1.5rem"}/>
              <span>Selecione imagem</span>
              <InputFile 
                id="fileUpload" 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
              />
            </label>
          </ImageUploadSection>
        </Content>
      </main>
      <Footer /> {/* Fixo no final */}
    </Container>
  );
}