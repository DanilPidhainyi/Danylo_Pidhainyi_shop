import styled from "styled-components";
import {DARK_GREEN, LIGHT_GREEN} from "../colors";

export const LoadMoreBtn = styled.button`
  width: 100%;
  height: 52px;
  display: ${(props) => (props.visible() ? `flex` : `none`)};
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 80px;

  background: ${LIGHT_GREEN};
  color: white;
  border: none;

  cursor: pointer;
  text-transform: uppercase;

  transition: 0.3s;

  font-weight: 400;
  font-size: 16px;

  &:hover {
    background: ${DARK_GREEN};
    font-size: 20px;
  }

  &:active {
    transition: none;
    background: ${LIGHT_GREEN};
  }
  
  grid-row: 3;
  grid-column-start: 1;
  grid-column-end: -1;
`;
