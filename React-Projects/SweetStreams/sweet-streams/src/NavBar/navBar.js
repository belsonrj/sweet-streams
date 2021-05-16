import React from 'react';
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
                <MenuBtn to="/movies">Movies</MenuBtn>
                <MenuBtn to="/tv">TV</MenuBtn>
                <MenuBtn to="/actors">Actors</MenuBtn>
            </Wrapper>
          </NavBarContainer>
        </NavBarBigContainer>
    );
}