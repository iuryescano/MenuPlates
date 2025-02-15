import { 
  Container, 
  Content, 
  LogoBox,
  FildBox,
  Input,
  Border,
  Logo,
  ButtonEnter
} from "./styles";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      alert("Preencha todos os campos!");
      return;
    }

    api.post("/users", {
      name,
      email,
      password
    }).then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    }).catch((error) => {
      if (error.response){
        alert(error.response.data.message);
      } else {
        alert("Erro ao cadastrar usuário, tente novamente!");
      }
    })
  }

  return (
    <Container>
      <main>
        <Content>
          <LogoBox>
            <Logo>
                <svg width="48" height="50" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0L25.9904 7.5V22.5L13 30L0.00961876 22.5V7.5L13 0Z" fill="#065E7C"/>
                </svg>
                MenuPlates
            </Logo>
          </LogoBox>
          <FildBox>
            <Border>
              <h1>Crie sua conta</h1>
              <Input>
                <p>Seu nome</p>
                <input type="text" placeholder="Exemplo: Maria da Silva" onChange={e => setName(e.target.value)}/>
              </Input>
              <Input>
                <p>E-mail</p>
                <input type="text" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setEmail(e.target.value)}/>
              </Input>
              <Input>
                <p>Senha</p>
                <input type="password" placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e.target.value)}/>
              </Input>
              <ButtonEnter onClick={handleSignUp}>
                Criar Conta
              </ButtonEnter>
              <Link to={"/"}>Já tenho uma conta</Link>
            </Border>
          </FildBox>
        </Content>
      </main>
    </Container>
  );
}
