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

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {

  const { signIn } = useAuth();

  const [ email , setEmail ] = useState("");
  const [ password , setPassword ] = useState("");
  
  function handleSignIn() {
    signIn({ 
      email,
      password
    });
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
              <h1>Faça Login</h1>
              <Input >
                <p>E-mail</p>
                <input type="text" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setEmail(e.target.value)}/>
              </Input>
              <Input >
                <p>Senha</p>
                <input type="password" placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e.target.value)}/>
              </Input>
              <ButtonEnter onClick={handleSignIn}>
                Entrar
              </ButtonEnter>
              <Link to={"/register"}>Criar uma conta</Link>
            </Border>
          </FildBox>
        </Content>
      </main>
    </Container>
  );
}
