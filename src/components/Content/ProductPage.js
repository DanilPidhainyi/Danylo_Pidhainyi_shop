import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductInfo } from "../../queries/product";
import {
  ProductName,
  InfoBox,
  LImage,
  LImageContainer,
  ProdPageContainer,
  ProductBrand,
  SImage,
  SImgContainer,
  AttributeName,
  AttributeBoxText,
  AttributeBoxSwatch,
  AttributeContainer,
  Price,
  AddToCartBtn,
  Description,
  ProductDataContainer,
} from "./ProductPage.style";
import { addProduct } from "../../redux/Cart/cart.actions";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prodData: { data: [], attributes: {} },
      largeImage: "",
      currentAttributes: {},
    };
  }

  setPriceCurrency = (currency) => {
    let amount = 0;
    this.state.prodData.data.prices.forEach((element) => {
      if (element.currency.symbol === currency) {
        amount = element.amount;
      }
    });
    return `${currency} ${amount}`;
  };

  handleAddToCart = (product) => {
    this.props.addProduct(product);
  };

  getInitialAttributes = (allAttributes) => {
    let initialAttributes = {};
    allAttributes.forEach((attribute) => {
      initialAttributes[attribute.name] = attribute.items[0].value;
    });
    return initialAttributes;
  };

  componentDidMount() {
    getProductInfo(this.props.currentProductID).then((result) => {
      this.setState({ prodData: result });
      this.setState({
        largeImage: result.data.gallery[0],
        currentAttributes: this.getInitialAttributes(result.data.attributes),
        attributes: result.data.attributes,
      });
    });
  }

  componentDidUpdate() {}

  render() {
    console.log(this.state.attributes);
    let initialAttributes = {};
    return (
      this.state.prodData.data.gallery !== undefined && (
        <ProdPageContainer cartIsOpen={this.props.cartIsOpen}>
          <ProductDataContainer>
            <SImgContainer>
              {this.state.prodData.data.gallery.map((img) => {
                return (
                  <SImage
                    key={img}
                    src={img}
                    alt="small photo"
                    onClick={() => {
                      this.setState({ largeImage: img });
                      console.log(img);
                    }}
                  />
                );
              })}
            </SImgContainer>
            <LImageContainer>
              <LImage src={this.state.largeImage} alt="large photo" />
            </LImageContainer>
            <InfoBox>
              <ProductBrand>{this.state.prodData.data.brand}</ProductBrand>
              <ProductName>{this.state.prodData.data.name}</ProductName>
              {this.state.prodData.data.attributes.map((attribute) => {
                //initialAttributes[attribute.name] = attribute.items[0].value;
                return (
                  <AttributeContainer key={attribute}>
                    <AttributeName>{attribute.name}:</AttributeName>
                    {attribute.items.map((item) => {
                      return attribute.type === "text" ? (
                        <AttributeBoxText
                          key={item.value}
                          clickable={true}
                          active={() => {
                            return (
                              this.state.currentAttributes[attribute.name] ===
                              item.value
                            );
                          }}
                          onClick={() => {
                            initialAttributes = this.state.currentAttributes;

                            initialAttributes[attribute.name] = item.value;
                            this.setState({
                              currentAttributes: initialAttributes,
                            });
                          }}
                        >
                          {item.value}
                        </AttributeBoxText>
                      ) : (
                        <AttributeBoxSwatch
                          key={item.value}
                          color={item.value}
                          clickable={true}
                          active={() => {
                            return (
                              this.state.currentAttributes[attribute.name] ===
                              item.value
                            );
                          }}
                          onClick={() => {
                            initialAttributes = this.state.currentAttributes;
                            initialAttributes[attribute.name] = item.value;
                            this.setState({
                              currentAttributes: initialAttributes,
                            });
                          }}
                        />
                      );
                    })}
                  </AttributeContainer>
                );
              })}

              <AttributeContainer>
                <AttributeName>price:</AttributeName>
                <Price>
                  {this.setPriceCurrency(this.props.currentCurrency)}
                </Price>
              </AttributeContainer>
              <AddToCartBtn
                inStock={this.state.prodData.data.inStock}
                onClick={() => {
                  let copy = JSON.parse(
                    JSON.stringify(this.state.currentAttributes)
                  );
                  this.handleAddToCart({
                    data: this.state.prodData.data,
                    attributes: copy,
                  });
                }}
              >
                add to cart
              </AddToCartBtn>

              <Description content={this.state.prodData.description} />
            </InfoBox>
          </ProductDataContainer>
        </ProdPageContainer>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  currentCurrency: state.currentCurrency.currentCurrency,
  currentProductID: state.currentProductID.currentProductID,
  cartData: state.cartData.cartData,
  cartIsOpen: state.cartIsOpen.cartIsOpen,
});
const mapDispatchToProps = (dispatch) => ({
  addProduct: (cartData) => dispatch(addProduct(cartData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
