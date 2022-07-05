import styled from "styled-components";
import {DARK_GREEN, LIGHT_GREEN} from "../../colors";

export const CartPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  size: fill;

  ${(props) =>
    props.cartIsOpen === "open"
      ? `
    pointer-events:none;
    opacity: 50%;
    background-color: rgba(34, 60, 80, 0.2);
    `
      : `background-color:transparent;
      opacity:100%;`}
`;

export const CartHeader = styled.h1`
  margin: 160px 110px 80px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  text-transform: uppercase;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: max-content;
  margin: 0 110px;
  padding: 30px 0;
  border-top: 1px solid #e5e5e5;
  position: relative;
  font-family: "Raleway", sans-serif;
`;

export const InfoContainer = styled.div`
  width: 75%;
`;

export const Price = styled.label`
  margin-top: 20px;
  font-weight: 700;
  font-size: 24px;
`;

export const ProductImage = styled.img`
  object-fit: contain;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 20px;
  right: 0;
  width: 80%;
  mix-blend-mode: multiply;
`;

export const ButtonsImageContainer = styled.div`
  width: 25%;
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const PlusMinusAmount = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 24px;

  width: max-content;
`;

export const ChangeAmountButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  width: 45px;
  height: 45px;
  border: 1px solid black;
  position: absolute;
  ${(props) => (props.position === "up" ? `top: 0;` : `bottom: 0;`)}
  margin: 0;
  padding: 0;

  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  text-align: center;
  font-size: 24px;
  line-height: 10px;
`;

export const AmountLabel = styled.label`
  font-weight: 500;
  font-size: 24px;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  padding: 30%;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ThinLabel = styled.div`
  font-weight: 400;
  font-size: 24px;
  margin: 8px 0;
  margin-right: 8px;
`;

export const ThickLabel = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin: 8px 0;
`;

export const OrderButton = styled.button`
  justify-content: center;
  align-items: center;

  position: static;
  width: 279px;
  height: 43px;
  background: ${LIGHT_GREEN};

  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  color: #ffffff;

  border: none;

  margin: 0 110px 80px;

  transition: 0.3s;

  &:hover {
    background: ${DARK_GREEN};
    font-size: 20px;
  }

  &:active {
    transition: none;
    background: ${LIGHT_GREEN};
  }
`;

export const GalleryButtons = styled.div`
  display: ${(props) => (props.gallery() ? `flex` : `none`)};
  flex-direction: row;
  position: absolute;
  padding: 0;
  width: max-content;
  bottom: 25px;
  right: 50px;
`;

export const GalleryArrow = styled.button`
  cursor: pointer;
  display: flex;
  width: 24px;
  height: 24px;
  border: none;
  margin-right: 8px;
  background-color: rgba(0, 0, 0, 0.73);
  opacity: 0.7;
  align-items: center;
  justify-content: center;
  transform: ${(props) =>
    props.direction === "right" ? `scaleX(-1)` : `none`};
`;
