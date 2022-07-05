import styled from "styled-components";
import {DARK_GREEN, LIGHT_GREEN} from "../../colors";

export const CartBtn = styled.button`
  justify-content: center;
  display: inline-flex;

  margin: 30px;

  ${(props) =>
    props.cartIsOpen === "open" ? `pointer-events: none;` : `cursor: pointer;`}
  background-color: transparent;
  border: none;
`;

export const CartnBage = styled.div`
  position: relative;
  width: min-content;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const CartImg = styled.img`
  margin: auto;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
`;

export const Badge = styled.span`
  position: absolute;
  bottom: 10px;
  left: 13px;
  color: white;
  height: 17px;
  width: 17px;
  background-color: #000;
  border-radius: 50%;
  display: ${(props) => (props.amount > 0 ? "inline-block" : "none")};
`;

// Whole miniCart container
export const CartContainer = styled.div`
  z-index: 10;
  justify-content: center;
  position: absolute;
  width: 400px;
  height: auto;
  right: 90px;
  top: 80px;
 
  background-color: white;
  transition: all 0.3s;
  transform: ${(props) => (props.open === "open" ? `scaleY(1.0) translateY(0)` : `scaleY(0) translateY(-100%)`)};
  display: column;
  // flex: ${(props) => (props.open === "open" ? '1' : '0')};
  //display: ${(props) => (props.open === "open" ? `column` : `none`)};
`;

// MiniCart header container and it's labels
export const Header = styled.div`
  width: 100%;
  height: 100%;
  display: inline;
  margin: 40px 20px;
`;

export const HeaderName = styled.label`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;

  /* identical to box height, or 26px */
  text-align: right;

  color: #1d1f22;
`;
export const HeaderCounterLabel = styled.label`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;

  /* identical to box height, or 26px */
  text-align: right;

  color: #1d1f22;
`;

// Added to cart products container
export const ProductsContainer = styled.div`
  /* width: max-content; */
  height: auto;
  max-height: 70vh;
  overflow: auto;
  display: column;
  transition: all ease-in-out 0.3s;
  white-space: nowrap;
`;

//Total sum
export const FooterTotal = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  
  margin: 0 16px 40px;
`;

export const TotalLabel = styled.label`
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;

  color: #1d1f22;
`;

export const SumLabel = styled.label`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;

  float: right;
  margin-right: 40px;
  color: #1d1f22;
`;

//Buttons container
export const ButtonsContainer = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  position: relative;
  padding-bottom: 16px;
`;

export const ViewBag = styled.button`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0 16px;

  cursor: pointer;

  width: 150px;
  height: 50px;

  background: #fff;
  border: 1px solid #1d1f22;
  box-sizing: border-box;

  transition: 0.3s;

  &:hover {
    background: #eee;
    font-size: 15px;
  }

  &:active {
    transition: none;
    background: #fff;
  }
`;

export const CheckOut = styled.button`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  border: none;

  cursor: pointer;

  position: absolute;
  right: 0;
  top: 0;
  margin: 0 16px;

  width: 150px;
  height: 50px;

  background: ${LIGHT_GREEN};
  transition: 0.3s;

  &:hover {
    background: ${DARK_GREEN};
    font-size: 15px;
  }

  &:active {
    transition: none;
    background: ${LIGHT_GREEN};
  }
`;
