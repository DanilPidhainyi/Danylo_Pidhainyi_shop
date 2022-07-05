import React, { Component } from "react";
import {
  Chevron,
  CurrencyDD,
  CurrencyDDcontainer,
  CurrencyDDitem,
  CurrencyDDList,
  CurrencyLbl,
} from "./CurrencyDD.style";
import Arrow from "../../assets/arrow.svg";
import { getCurrency } from "../../queries/currency";
import { setCurrentCurrency } from "../../redux/Currency/currency.actions";
import { connect } from "react-redux";

class CurrencyDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: {},
      open: false,
    };
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClick = () => this.setState((prevState) => ({ open: !prevState.open }));

  onOptionClicked = (value) => {
    this.setState({ open: false });
    this.props.setCurrentCurrency({
      currentCurrency: value,
    });
  };

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState({ open: false });
    }
  }

  async componentDidMount() {
    this.setState({ currency: await getCurrency() });
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    const { currentCurrency } = this.props;
    return (
      <div>
        <CurrencyDD onClick={this.handleClick}>
          <CurrencyLbl>{currentCurrency}</CurrencyLbl>
          <Chevron src={Arrow} alt="arrow" open={this.state.open} />
        </CurrencyDD>
        <CurrencyDDcontainer open={this.state.open} ref={this.wrapperRef}>
          <CurrencyDDList>
            {Object.entries(this.state.currency).map(([key, value]) => {
              return (
                <CurrencyDDitem
                  key={key}
                  active={() => currentCurrency === key}
                  onClick={() => this.onOptionClicked(key)}
                >
                  <CurrencyLbl>
                    {key} {value}
                  </CurrencyLbl>
                </CurrencyDDitem>
              );
            })}
          </CurrencyDDList>
        </CurrencyDDcontainer>
      </div>
    );
  }
}

const mapStateToProps = ({ currentCurrency }) => ({
  currentCurrency: currentCurrency.currentCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentCurrency: (currentCurrency) =>
    dispatch(setCurrentCurrency(currentCurrency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDropDown);
