import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CartHeader,
  CartPageContainer,
  OrderButton,
  ProductContainer,
  ThickLabel,
  ThinLabel,
  TotalContainer,
} from "./Cart.style";
import CartProduct from "./CartProduct";
import { selectCartItemsCount } from "../../../redux/Cart/cart.selectors";
import { clearCart } from "../../../redux/Cart/cart.actions";

class Cart extends Component {
  countSum = (currency) => {
    let sum = 0;
    this.props.cartData.forEach((product) => {
      product.data.prices.forEach((element) => {
        if (element.currency.symbol === currency) {
          sum = sum + element.amount * product.quantity;
        }
      });
    });

    return parseFloat(sum.toFixed(2));
  };

  tax = () =>
    ((this.countSum(this.props.currentCurrency) * 21) / 100).toFixed(2);

  render() {
    return (
      <CartPageContainer cartIsOpen={this.props.cartIsOpen}>
        <CartHeader>Cart</CartHeader>
        {this.props.cartData.map((product) => {
          return <CartProduct key={product.data.id} product={product} />;
        })}
        <ProductContainer>
          <TotalContainer>
            <ThinLabel>Tax 21%:</ThinLabel>
            <ThinLabel>Quantity:</ThinLabel>
            <ThinLabel>Total:</ThinLabel>
          </TotalContainer>
          <TotalContainer>
            <ThickLabel>
              {this.props.currentCurrency} {this.tax()}
            </ThickLabel>
            <ThickLabel>{this.props.totalNumCartItems}</ThickLabel>
            <ThickLabel>
              {this.props.currentCurrency}{" "}
              {(
                this.countSum(this.props.currentCurrency) +
                parseFloat(this.tax())
              ).toFixed(2)}
            </ThickLabel>
          </TotalContainer>
        </ProductContainer>
        <OrderButton onClick={() => this.props.clearCart()}>Order</OrderButton>
      </CartPageContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  cartIsOpen: state.cartIsOpen.cartIsOpen,
  cartData: state.cartData.cartItems,
  currentCurrency: state.currentCurrency.currentCurrency,
  totalNumCartItems: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
