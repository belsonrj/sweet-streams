import styled from "styled-components";
import theme from "../styles/theme";
import { Link } from "react-router-dom";

export const NavBarBigContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #466e64;
`;
export const NavBarContainer = styled.header`
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 60px;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  cursor: pointer;
`;

export const MenuBtn = styled(Link)`
  background: transparent;
  text-decoration: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  border: 1px solid transparent;
  margin-right: 10px;
  color: ${({ primary }) =>
    primary === "true" ? theme.color.primary : "#fff"};
  &:hover {
    transition: all 0.3s ease-out;
    /* border: 1px solid ${theme.color.primary_bright}; */
    color: ${({ primary }) =>
      primary === "true" ? theme.color.primary_bright : "#ffd52e"};
  }
`;