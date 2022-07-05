import styled from "styled-components";

export const ProductContainer = styled.div`
  width: auto;
  height: max-content;
  display: flex;
  flex-direction: row;
  margin: 40px 0;
  padding: 0 16px;
  
`;

export const ProductInfo = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  display: flex;
  width: 60%;
  flex-direction: column;
  margin-right: 16px;
`;

export const ImageContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  margin: 0;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* margin-right: 32px; */
  display: flex;
  justify-content: center;
`;

export const ThinLabel = styled.label`
  margin: 5px 0;
  font-weight: 300;
  font-size: 16px;
`;

export const ThickLabel = styled.label`
  margin: 3px 0;
  font-weight: 500;
  font-size: 16px;
`;

export const CategoryLabel = styled.label`
  margin: 5px 0;
  font-weight: 400;
  font-size: 14px;
`;

export const AttributeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: max-content;
  height: min-content;
  pointer-events: none;
`;

export const AttributeBoxText = styled.div`
  margin-right: 8px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;

  width: 32px;
  height: 24px;
  border: 1px solid #1d1f22;

  ${(props) =>
    props.active()
      ? `background-color: #1d1f22;
    color: white;`
      : `background-color: #fff;
    color: black;`}
`;

export const AttributeBoxSwatch = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  -webkit-text-fill-color: transparent;
  border: 1px solid #1d1f22;
  background: ${(props) => props.color};

  ${(props) =>
    props.active()
      ? `
    border: 3px solid #5ece7b;
  `
      : `  border: 1px solid #1d1f22;
`}
`;

export const PlusMinusAmount = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 24px;
  padding-left: 0;
  background-color: white;
  margin-right: 10px;
  width: 10%;
  justify-content: center;
  align-items: center;
`;

export const ChangeAmountButton = styled.button`
  background: white;
  width: 24px;
  height: 24px;
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
  cursor: pointer;
`;

export const AmountLabel = styled.label`
  font-family: "Raleway";
  height: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  padding: 30%;
`;
