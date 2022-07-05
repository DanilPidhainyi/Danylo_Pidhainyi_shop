import styled from "styled-components";
import {ECLIPSE} from "../colors";

export const ContentPage = styled.div`
  size: fill;
  height: 100%;
  //width: 100vw;
  padding-left: 100px;
  padding-right: 100px;
  border: 1px solid transparent;
  display: grid;
  //display: flex;
  //justify-content: center;
//{todo що за іs опен}
  ${(props) =>
    props.cartIsOpen === "open"
      ? `
    opacity: 50%;
    background-color: ${ECLIPSE};
    pointer-events:none;
    transition: all ease-in-out 0.3s;
    `
      : `background-color:transparent;
      transition: all ease-in-out 0.3s;
      opacity:100%;`};
`;

export const ContentCategory = styled.h2`
  font-size: 42px;
  text-decoration: none;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
  text-transform: capitalize;

  margin: 160px 0 0;
  padding: 0 40px;
  align-items: center;
  width: min-content;
  height: max-content;
  grid-row: 1;
`;

export const ContentContainer = styled.div`
  justify-content: space-between;
  width: 100%;
  font-family: "Raleway", sans-serif;
  grid-row: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: normal;
`;
