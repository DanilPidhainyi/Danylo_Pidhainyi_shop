import React, { Component } from "react";
import { getAllCategories } from "../../queries/categories";
import {
  NavbarContainer,
  NavbarLink,
  NavbarLinkContainer,
} from "./Navbar.style";
import { setCurrentCategory } from "../../redux/Category/category.actions";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCategories: [],
    };
  }

  onCategoryClicked = (category) => {
    this.props.setCurrentCategory({ currentCategory: category });
  };

  async componentDidMount() {
    this.setState({ allCategories: await getAllCategories() });
  }

  render() {
    return (
      <>
        <NavbarContainer>
          <NavbarLinkContainer>
            {this.state.allCategories.map((val) => {
              return (
                <NavbarLink
                  key={val}
                  active={(this.props.currentCategory === val).toString()}
                  to={`/${val}`}
                  onClick={() => {
                    this.onCategoryClicked(val);
                  }}
                >
                  {val}
                </NavbarLink>
              );
            })}
          </NavbarLinkContainer>
        </NavbarContainer>
      </>
    );
  }
}

const mapStateToProps = ({ currentCategory }) => ({
  currentCategory: currentCategory.currentCategory,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentCategory: (currentCategory) =>
    dispatch(setCurrentCategory(currentCategory)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
