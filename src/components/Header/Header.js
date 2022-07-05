import React, { Component } from "react";
import {
  LeftContainer,
  CenterContainer,
  RightContainer,
  HeaderContainer,
  Logo,
} from "./Header.style";
import CurrencyDropDown from "./CurrencyDD";
import Navbar from "./Navbar";
import Cart from "./CartPreview/CartPreview";
import LogoImg from "../../assets/Group.png";

export default class Header extends Component {
  render() {
    return (
      <>
        <HeaderContainer>
          <LeftContainer>
            <Navbar />
          </LeftContainer>
          <CenterContainer>
            <Logo src={LogoImg}></Logo>
          </CenterContainer>
          <RightContainer>
            <CurrencyDropDown />
            <Cart />
          </RightContainer>
        </HeaderContainer>
      </>
    );
  }
}
