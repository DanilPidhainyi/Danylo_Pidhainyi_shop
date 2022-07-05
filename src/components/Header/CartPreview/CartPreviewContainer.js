import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ProductContainer,
  ProductInfo,
  ProductImg,
  ThinLabel,
  ThickLabel,
  CategoryLabel,
  AttributeContainer,
  AttributeBoxSwatch,
  AttributeBoxText,
  PlusMinusAmount,
  ChangeAmountButton,
  AmountLabel,
  ImageContainer,
} from "./CartPreviewContainer.style";
import { getAllAttributes } from "../../../queries/product";
import { addProduct, reduceProduct } from "../../../redux/Cart/cart.actions";

class CartPreviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attributes: {},
    };
  }

  getAttributes = async (id) => {
    this.setState({ attributes: await getAllAttributes(id) });
  };

  setPriceCurrency = (currency, product) => {
    let amount = 0;
    product.data.prices.forEach((element) => {
      if (element.currency.symbol === currency) {
        amount = element.amount;
      }
    });
    return `${currency} ${amount}`;
  };

  render() {
    return (
      <>
        <ProductContainer key={this.props.product.data.id}>
          <ProductInfo>
            <ThinLabel>{this.props.product.data.brand}</ThinLabel>
            <ThinLabel>{this.props.product.data.name}</ThinLabel>
            <ThickLabel>
              {this.setPriceCurrency(
                this.props.currentCurrency,
                this.props.product
              )}
            </ThickLabel>
            {this.props.product.data.attributes !== undefined &&
              this.props.product.data.attributes.map((category) => {
                return (
                  <div key={this.props.product.data.id}>
                    <CategoryLabel
                      key={this.props.product.data.id + category.name}
                    >
                      {category.name}:
                    </CategoryLabel>
                    <AttributeContainer
                      key={this.props.product.data.id + category.type}
                    >
                      {category.items.map((item) => {
                        return category.type === "text" ? (
                          <AttributeBoxText
                            key={category.type + item.id}
                            active={() => {
                              return (
                                this.props.product.attributes[category.name] ===
                                item.value
                              );
                            }}
                          >
                            {item.value}
                          </AttributeBoxText>
                        ) : (
                          <AttributeBoxSwatch
                            key={category.name + item.value}
                            color={item.value}
                            active={() => {
                              return (
                                this.props.product.attributes[category.name] ===
                                item.value
                              );
                            }}
                          />
                        );
                      })}
                    </AttributeContainer>
                  </div>
                );
              })}
          </ProductInfo>
          <PlusMinusAmount>
            <ChangeAmountButton
              position="up"
              onClick={() => this.props.addProduct(this.props.product)}
            >
              +
            </ChangeAmountButton>
            <AmountLabel>{this.props.product.quantity}</AmountLabel>
            <ChangeAmountButton
              position="down"
              onClick={() => this.props.reduceProduct(this.props.product)}
            >
              –
            </ChangeAmountButton>
          </PlusMinusAmount>
          <ImageContainer>
            <ProductImg src={this.props.product.data.gallery[0]} alt="photo" />
          </ImageContainer>
        </ProductContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentCurrency: state.currentCurrency.currentCurrency,
  cartData: state.cartData.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (cartData) => dispatch(addProduct(cartData)),
  reduceProduct: (cartData) => dispatch(reduceProduct(cartData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPreviewContainer);
