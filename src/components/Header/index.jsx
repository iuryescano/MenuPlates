import React from 'react';
import { HeaderContainer, Logo, SearchBar, OrdersBox, LogoutButton, SearchContainer, SearchIcon } from './styles';
import { CiSearch  } from "react-icons/ci";
import { PiReceipt } from "react-icons/pi";
import { RxExit } from "react-icons/rx";

export function Header() {
    return (
    <HeaderContainer>
        
        <Logo>
            <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0L25.9904 7.5V22.5L13 30L0.00961876 22.5V7.5L13 0Z" fill="#065E7C"/>
            </svg>
            MenuPlates
        </Logo>

        <SearchContainer>
            <SearchIcon>
                <CiSearch size={24} />
            </SearchIcon>
            <SearchBar type="text" placeholder="Busque por pratos ou ingredientes" />
        </SearchContainer>
        <OrdersBox>
            <PiReceipt size={24} />
            Pedidos (0) {/* Você pode alterar essa quantidade dinamicamente */}
        </OrdersBox>
        <LogoutButton>
            <RxExit size={24} /> {/* Ícone de logout */}
        </LogoutButton>
        </HeaderContainer>
    );
};