import styled from "styled-components";
import { Link } from "react-router-dom";
import {DARK_GREEN, ECLIPSE, LIGHT_GREEN} from "../colors";

export const ProductLink = styled(Link)`
  text-decoration: none;
  color: black;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  //background: blueviolet;
`;

export const ProductContainer = styled.div`
  position: relative;
  margin-top: 103px;
  margin-right: 40px;
  display: flex;
  width: 386px;
  height: 444px;
  cursor: pointer;
  padding: 15px 15px 15px 15px;


  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    transition: all ease-in-out 0.3s;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 330px;
  //padding-bottom: 24px;
  //object-fit: cover;
  object-fit: contain;
  //margin: 16px;

  mix-blend-mode: multiply;

  ${(props) =>
    props.inStock
      ? `filter:grayscale(0%);`
      : `filter:grayscale(100%); opacity: 0.4;`};
`;

export const OutOfStock = styled.label`
  display: ${(props) => (props.inStock ? `none` : `flex`)};
  font-size: 24px;
  color: ${ECLIPSE};
  background-color: transparent;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
`;

export const ProductInfo = styled.div`
  //margin-top: 24px;
  display: flex;
  flex-direction: column;
  font-style: normal;
  line-height: 160%;
  color: #1D1F22;
  //height: 25%;
`;

export const ProductName = styled.label`
  display: flex;
  font-size: 18px;
  color: black;
  font-weight: 300;
  //margin: 15px;
`;

export const ProductPrice = styled.label`
  display: flex;
  font-size: 18px;
  font-weight: 500;
  //margin: 15px;
`;

export const AddButton = styled.button`
  cursor: pointer;
  bottom: 90px;
  right: 40px;
  position: absolute;
  border: none;
  padding: 15px;
  background-color: ${LIGHT_GREEN};
  border-radius: 50%;
  transition: 0.3s;
  display: ${(props) => (props.inStock && props.divHover ? `flex` : `none`)};
  &:hover {
    background: ${DARK_GREEN};
    transform: scale(1.2);
  }
  &:active {
    transition: none;
    background: ${LIGHT_GREEN};
  }
`;

export const ButtonImg = styled.img`
  filter: invert(100%);
  height: 25px;
  width: 25px;
`;
