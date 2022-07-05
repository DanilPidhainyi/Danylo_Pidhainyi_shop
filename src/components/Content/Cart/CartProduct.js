import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct, reduceProduct } from "../../../redux/Cart/cart.actions";
import GallArrow from "../../../assets/gallArrow.svg";
import {
  ProductContainer,
  Price,
  PlusMinusAmount,
  ChangeAmountButton,
  AmountLabel,
  ProductImage,
  InfoContainer,
  ButtonsImageContainer,
  GalleryButtons,
  GalleryArrow,
} from "./Cart.style";
import {
  InfoBox,
  ProductBrand,
  ProductName,
  AttributeContainer,
  AttributeName,
  AttributeBoxText,
  AttributeBoxSwatch,
} from "../ProductPage.style";

class CartProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  setPriceCurrency = (currency) => {
    let amount = 0;
    this.props.product.data.prices.forEach((element) => {
      if (element.currency.symbol === currency) {
        amount = element.amount;
      }
    });
    return `${currency} ${amount}`;
  };

  clickLeft = (currentIndex, arrayLength) => {
    return this.setState({ currentIndex: (currentIndex + 1) % arrayLength });
  };

  clickRight = (currentIndex, arrayLength) => {
    return this.setState({
      currentIndex: (arrayLength + (currentIndex - 1)) % arrayLength,
    });
  };

  render() {
    return (
      <ProductContainer>
        <InfoContainer>
          <InfoBox>
            <ProductBrand>{this.props.product.data.brand}</ProductBrand>
            <ProductName>{this.props.product.data.name}</ProductName>
            <Price>{this.setPriceCurrency(this.props.currentCurrency)}</Price>
            {this.props.product.data.attributes.map((category) => {
              return (
                <>
                  <AttributeContainer key={category.name}>
                    <AttributeName>{category.name}:</AttributeName>
                    {category.items.map((item) => {
                      return category.type === "text" ? (
                        <AttributeBoxText
                          key={item.value}
                          clickable={false}
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
                          key={item.value}
                          color={item.value}
                          clickable={false}
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
                </>
              );
            })}
          </InfoBox>
        </InfoContainer>
        <PlusMinusAmount cartIsOpen={this.props.cartIsOpen}>
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
        <ButtonsImageContainer>
          <ProductImage
            src={this.props.product.data.gallery[this.state.currentIndex]}
            alt="photo"
          />
          <GalleryButtons
            gallery={() => {
              return this.props.product.data.gallery.length > 1;
            }}
          >
            <GalleryArrow
              direction="left"
              onClick={() =>
                this.clickRight(
                  this.state.currentIndex,
                  this.props.product.data.gallery.length
                )
              }
            >
              <img src={GallArrow} alt="arrow" />
            </GalleryArrow>
            <GalleryArrow
              direction="right"
              onClick={() =>
                this.clickLeft(
                  this.state.currentIndex,
                  this.props.product.data.gallery.length
                )
              }
            >
              <img src={GallArrow} alt="arrow" />
            </GalleryArrow>
          </GalleryButtons>
        </ButtonsImageContainer>
      </ProductContainer>
    );
  }
}

const mapStateToProps = ({ currentCurrency, cartIsOpen }) => ({
  currentCurrency: currentCurrency.currentCurrency,
  cartIsOpen: cartIsOpen.cartIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (cartData) => dispatch(addProduct(cartData)),
  reduceProduct: (cartData) => dispatch(reduceProduct(cartData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);
