// Frontend - Header/index.jsx
import React, { useState } from 'react';
import { HeaderContainer, Logo, SearchBar,Content, OrdersBox,Menu, LogoutButton, SearchContainer, SearchIcon } from './styles';
import { CiSearch } from "react-icons/ci";
import { PiReceipt } from "react-icons/pi";
import { RxExit } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { MdOutlineFormatListBulleted } from "react-icons/md";

import { USER_ROLE } from '../../utils/roles';

export function Header( ) {
    const { user } = useAuth();
    const isAdmin = user?.role === USER_ROLE.ADMIN;
    
    const { signOut } = useAuth();
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Navega para a Home passando o termo no state
        navigate("/", { state: { search } });
    };
    

    return (

        <HeaderContainer>
        <Content>
            <Menu>
                <MdOutlineFormatListBulleted/>
            </Menu>
            <Link to={"/"}>
                <Logo>
                    <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 0L25.9904 7.5V22.5L13 30L0.00961876 22.5V7.5L13 0Z" fill="#065E7C"/>
                    </svg>
                    MenuPlates
                    <p>{user.role}</p>
                </Logo>
            </Link>
            
        </Content>

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
            />
            </form>
        </SearchContainer>

        {isAdmin ? (
            <OrdersBox>
            <Link to="/newplate">Novo Prato</Link>
            </OrdersBox>
        ) : (
            <OrdersBox>
            <PiReceipt size={24} />
            Pedidos (0)
            </OrdersBox>
        )}

        <LogoutButton onClick={signOut}>
            <Link to={"/"}>
            <RxExit size={24} />
            </Link>
        </LogoutButton>
        </HeaderContainer>
    );
}
