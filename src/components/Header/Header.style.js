import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  z-index: 20;
  position: fixed;
  top: 0;
  background: white;
`;

const LeftContainer = styled.div`
  flex: 45%;
  display: flex;
  margin-left: 117px;
`;

const CenterContainer = styled.div`
  flex: 10%;
  display: flex;
`;

const RightContainer = styled.div`
  flex: 45%;
  align-items: center;
  justify-content: flex-end;
  display: flex;
  margin-right: 117px;
  background: white;
`;

const Logo = styled.img`
  padding: 25px;
`;

export {
  HeaderContainer,
  LeftContainer,
  CenterContainer,
  RightContainer,
  Logo,
};
