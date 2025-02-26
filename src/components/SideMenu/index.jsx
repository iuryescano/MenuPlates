import React from "react";
import { Container, Header, Content, Footer, FooterLogo, Section, FooterText, SearchBar, SearchContainer, SearchIcon } from "./styles";
import { IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function SideMenu({menuIsOpen, onCloseMenu}) {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();
      // Navega para a Home passando o termo no state
      navigate("/", { state: { search } });
      onCloseMenu(); // Fecha o menu após navegar
  };


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const { signOut } = useAuth();

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        { menuIsOpen &&
          <button onClick={onCloseMenu}>
            <IoClose/>
          </button>
        }
          <p>Menu</p>
      </Header>

      <Content>
        <SearchContainer>
            <SearchIcon>
            <CiSearch size={24} />
            </SearchIcon>
            <form onSubmit={handleSubmit}>
            <SearchBar 
                type="text" 
                placeholder="Busque por pratos ou ingredientes" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyPress} // Adiciona este handler
            />
            </form>
        </SearchContainer>

        <Section>
          <Link to={"/newplate"}>Novo Prato</Link>
          <Link to={"/"} onClick={signOut}>Sair</Link>
        </Section>
      </Content>

      <Footer>
        <FooterLogo>
          <svg width="20" height="30" viewBox="0 0 26 30" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 0L25.9904 7.5V22.5L13 30L0.00961876 22.5V7.5L13 0Z" fill="white"/>
          </svg>
          MenuPlates
        </FooterLogo>
        <FooterText>© 2025 - Desenvolvido por Iury Escano Cordeiro.</FooterText>
      </Footer>
    </Container>
  );
}
