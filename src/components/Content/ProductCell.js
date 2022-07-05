import React, { Component } from "react";
import Cart from "../../assets/shopping-cart.svg";
import { AddButton, ButtonImg, OutOfStock, ProductContainer, ProductImg, ProductName,
  ProductPrice, ProductLink, ProductInfo } from "./ProductCell.style";
import { getProductCellInfo, getProductInfo } from "../../queries/product";
import { connect } from "react-redux";
import { setCurrentProductID } from "../../redux/ProductID/productID.actions";
import { addProduct } from "../../redux/Cart/cart.actions";

class ProductCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      divHover: false,
    };
  }

  getAllCellData = async (id) => {
    this.setState({
      data: await getProductCellInfo(id),
    });
  };

  getAllData = async (id) => {
    this.props.setCurrentProductID({
      currentProductID: await getProductInfo(id),
    });
  };

  setPriceCurrency = (currency) => {
    let amount = 0;
    this.state.data.prices.forEach((element) => {
      if (element.currency.symbol === currency) {
        amount = element.amount;
      }
    });
    return `${currency} ${amount}`;
  };

  handleEffect = () =>
    this.setState((prevState) => ({ divHover: !prevState.divHover }));

  handleAddToCart = (product) => {
    this.props.addProduct(product);
  };

  async componentDidMount() {
    await this.getAllCellData(this.props.id);
  }

  render() {
    return (
      this.state.data.gallery !== undefined && (
        <ProductContainer
          onMouseEnter={this.handleEffect}
          onMouseLeave={this.handleEffect}
          onClick={() => {
            // getProductInfo(this.props.id).then((result) => console.log(result));
            // this.getAllData(this.state.data.id);
            this.props.setCurrentProductID({
              currentProductID: this.state.data.id,
            });
          }}
        >
          <ProductLink
            to={`/product/${this.props.id}`}
          >
            <ProductImg
              inStock={this.state.data.inStock}
              src={this.state.data.gallery[0]}
              alt="photo"
            />

            <OutOfStock inStock={this.state.data.inStock}>
              Out of stock
            </OutOfStock>
            <ProductInfo>
              <ProductName>
                {this.state.data["brand"]} {this.state.data["name"]}
              </ProductName>
              <ProductPrice>
                {this.setPriceCurrency(this.props.currentCurrency)}
              </ProductPrice>
            </ProductInfo>
          </ProductLink>
          <AddButton
            divHover={this.state.divHover}
            inStock={this.state.data.inStock}
            onClick={() => {
              getProductInfo(this.props.id).then((result) =>
                this.handleAddToCart({
                  data: result.data,
                  attributes: result.attributes,
                })
              );
            }}
          >
            <ButtonImg src={Cart} alt="cart" />
          </AddButton>
        </ProductContainer>
      )
    );
  }
}

const mapStateToProps = ({ currentCurrency, currentProductID, cartData }) => ({
  currentCurrency: currentCurrency.currentCurrency,
  currentProductID: currentProductID.currentProductID,
  cartData: cartData.cartData,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentProductID: (currentProductID) =>
    dispatch(setCurrentProductID(currentProductID)),
  addProduct: (cartData) => dispatch(addProduct(cartData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCell);
