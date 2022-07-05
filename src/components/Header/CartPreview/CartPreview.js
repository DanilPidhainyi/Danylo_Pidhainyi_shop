import React, { Component } from "react";
import cartImg from "../../../assets/shopping-cart.svg";
import {
  Badge,
  CartBtn,
  CartContainer,
  CartImg,
  CartnBage,
  Header,
  HeaderName,
  HeaderCounterLabel,
  ProductsContainer,
  FooterTotal,
  TotalLabel,
  SumLabel,
  ButtonsContainer,
  ViewBag,
  CheckOut,
} from "./CartPreview.style";
import { setCartOpen } from "../../../redux/CartOpen/cartOpen.actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItemsCount } from "../../../redux/Cart/cart.selectors";
import CartPreviewContainer from "./CartPreviewContainer";
import { clearCart } from "../../../redux/Cart/cart.actions";

class CartPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attributes: [],
      amount: 0,
    };

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClick = () => {
    this.props.setCartOpen({ cartIsOpen: "open" });
  };

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.props.setCartOpen({ cartIsOpen: "close" });
    }
  }

  countTotal = (currency) => {
    let sum = 0;
    this.props.cartData.forEach((product) => {
      product.data.prices.forEach((element) => {
        if (element.currency.symbol === currency) {
          sum = sum + element.amount * product.quantity;
        }
      });
    });

    return `${currency} ${(sum + (sum * 21) / 100).toFixed(2)}`;
  };

  async componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <>
        <CartBtn
          onClick={() => this.handleClick()}
          cartIsOpen={this.props.cartIsOpen}
        >
          <CartnBage>
            <CartImg src={cartImg} alt="shopping cart" />
            <Badge amount={this.props.totalNumCartItems}>
              {this.props.totalNumCartItems}
            </Badge>
          </CartnBage>
        </CartBtn>
        <CartContainer open={this.props.cartIsOpen} ref={this.wrapperRef}>
          <Header>
            <HeaderName>My Bag</HeaderName>
            <HeaderCounterLabel>
              , {this.props.totalNumCartItems} items
            </HeaderCounterLabel>
          </Header>
          <ProductsContainer>
            {this.props.cartData.map((product) => {
              return (
                <CartPreviewContainer key={product.data.id} product={product} />
              );
            })}
          </ProductsContainer>
          <FooterTotal>
            <TotalLabel>Total:</TotalLabel>
            <SumLabel>{this.countTotal(this.props.currentCurrency)}</SumLabel>
          </FooterTotal>
          <ButtonsContainer>
            <Link style={{ textDecoration: "none" }} to="/cart">
              <ViewBag
                onClick={() => this.props.setCartOpen({ cartIsOpen: "close" })}
              >
                VIEW BAG
              </ViewBag>
            </Link>
            <CheckOut onClick={() => this.props.clearCart()}>
              CHECK OUT
            </CheckOut>
          </ButtonsContainer>
        </CartContainer>
      </>
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
  setCartOpen: (cartIsOpen) => dispatch(setCartOpen(cartIsOpen)),
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPreview);
