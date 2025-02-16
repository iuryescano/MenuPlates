import React from 'react';
import { HeaderContainer, Logo, SearchBar, OrdersBox, LogoutButton, SearchContainer, SearchIcon } from './styles';
import { CiSearch  } from "react-icons/ci";
import { PiReceipt } from "react-icons/pi";
import { RxExit } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';


export function Header() {
    const isAdmin = true; // Isso será controlado futuramente via banco de dados

    const { signOut } = useAuth();

    return (
    <HeaderContainer>
        
        <Link to={"/"}>
            <Logo>
                <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0L25.9904 7.5V22.5L13 30L0.00961876 22.5V7.5L13 0Z" fill="#065E7C"/>
                </svg>
                MenuPlates
            </Logo>
        </Link>

        <SearchContainer>
            <SearchIcon>
                <CiSearch size={24} />
            </SearchIcon>
            <SearchBar type="text" placeholder="Busque por pratos ou ingredientes" />
        </SearchContainer>

        {isAdmin ? (
            <OrdersBox>
                <Link to="/newplate">Novo Prato</Link>
            </OrdersBox>
        ) : (
        <OrdersBox>
            <PiReceipt size={24} />
            Pedidos (0) {/* Você pode alterar essa quantidade dinamicamente */}
        </OrdersBox>
        )}
        
        
        <LogoutButton onClick={signOut}>
            <Link to={"/"}>
                <RxExit size={24} /> {/* Ícone de logout */}
            </Link>
        </LogoutButton>
        </HeaderContainer>
    );
};