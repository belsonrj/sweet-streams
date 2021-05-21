import React from 'react';
import { BsBook, BsFilm, BsTv } from "react-icons/bs";

import {
    NavBarBigContainer,
    NavBarContainer,
    Wrapper,
    MenuBtn,
  } from "./navBar.styled"

export default function NavBar() {
    return (
        <NavBarBigContainer>
          <NavBarContainer>
            <Wrapper>
                <MenuBtn to="/">Sweet Streams</MenuBtn>
            </Wrapper>
            <Wrapper>
                <BsFilm />
                <MenuBtn to="/movies">Movies</MenuBtn>
                <BsTv />
                <MenuBtn to="/tv">TV</MenuBtn>
                <BsBook />
                <MenuBtn to="/genres">Genres</MenuBtn>
            </Wrapper>
          </NavBarContainer>
        </NavBarBigContainer>
    );
}