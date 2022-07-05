import React, { Component } from "react";
import ProductCell from "./ProductCell";
import { getCategoryIDs } from "../../queries/categories";
import { ContentContainer, ContentCategory, ContentPage } from "./Content.style.js";
import { connect } from "react-redux";
import { LoadMoreBtn } from "./LoadMore.style";

class Content extends Component {
  /**
   * This is a component of the gallery page.
   * */

  constructor(props) {
    super(props);
    this.state = {
      categoryIDs: [],
      prevIndex: 6,
    };
  }

  updateCategoryIDs = async (prevProps) => {
    if (prevProps.currentCategory !== this.props.currentCategory) {
      // This empty setState is to avoid shallow merging
      this.setState({ categoryIDs: [] });
      this.setState({
        categoryIDs: await getCategoryIDs(this.props.currentCategory),
      });
    }
  };

  async componentDidMount() {
    this.setState({
      categoryIDs: await getCategoryIDs(this.props.currentCategory),
    });
  }

  async componentDidUpdate(prevProps) {
    this.updateCategoryIDs(prevProps);
  }

  render() {
    return (
      <ContentPage cartIsOpen={this.props.cartIsOpen}>
        <ContentCategory>{this.props.currentCategory}</ContentCategory>
        <ContentContainer>
          {this.state.categoryIDs
            .slice(0, this.state.prevIndex)
            .map((element) => {
              return <ProductCell key={element} id={element} />;
            })}
          <LoadMoreBtn
            visible={() => this.state.prevIndex < this.state.categoryIDs.length}
            onClick={() =>
              this.setState({
                prevIndex: this.state.prevIndex + 6,
              })
            }
          >
            LoadMore
          </LoadMoreBtn>
        </ContentContainer>
      </ContentPage>
    );
  }
}

const mapStateToProps = ({ currentCurrency, currentCategory, cartIsOpen }) => ({
  currentCurrency: currentCurrency.currentCurrency,
  currentCategory: currentCategory.currentCategory,
  cartIsOpen: cartIsOpen.cartIsOpen,
});

export default connect(mapStateToProps)(Content);
