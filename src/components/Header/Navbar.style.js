import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {LIGHT_GREEN} from "../colors";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const NavbarLink = styled(NavLink)`
  position: static;
  display: flex;
  align-items: center;
  padding: 32px;
  padding-bottom: 28px;
  border-bottom: 2px solid
    ${(props) => (props.active === "true" ? LIGHT_GREEN : "transparent")};

  text-decoration: none;
  color: ${(props) => (props.active === "true" ? LIGHT_GREEN : "black")};
  font-size: 16px;
  font-family: "Raleway", sans-serif;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    outline: 1px;
    border-color: ${LIGHT_GREEN};
    transition: 150ms ease-in;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;
