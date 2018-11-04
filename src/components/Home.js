import React from 'react';
import Customize from './Customize.js';
import CartLink from './CartLink.js';
import SizeMenu from './SizeMenu.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    const defaultPizza = this.props.data.pizzaSizes[0];
    this.state = {
      sizeChosen: false,
      pizza: {
        size: defaultPizza.sizeName,
        basePrice: defaultPizza.basePrice,
        imgPath: defaultPizza.imgPath
      }
    };

    this.handleSelectSize = this.handleSelectSize.bind(this);
    this.handleSubmitSize = this.handleSubmitSize.bind(this);
    this.addPizza = this.addPizza.bind(this);
    this.createPizza = this.createPizza.bind(this);
    this.goBackToSizeChooseScreen = this.goBackToSizeChooseScreen.bind(this);
  };

  static propTypes = {
    handleAddPizza: PropTypes.func.isRequired,
    cart: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      size: PropTypes.string.isRequired,
      basePrice: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      imgPath: PropTypes.string.isRequired,
      toppings: PropTypes.arrayOf(PropTypes.shape({
        __typename: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      }).isRequired).isRequired
    }).isRequired).isRequired,
    data: PropTypes.shape({
      pizzaSizes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sizeName: PropTypes.string.isRequired,
        basePrice: PropTypes.number.isRequired
      }).isRequired).isRequired,
      toppings: PropTypes.arrayOf(PropTypes.shape({
        __typename: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      }).isRequired).isRequired,
      doughTypes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      }).isRequired).isRequired,
    }).isRequired
  };

  goBackToSizeChooseScreen() {
    this.setState({
      sizeChosen: false
    });
  }

  handleSelectSize(pizzaId) {
    const selectedPizza = this.props.data.pizzaSizes.filter(ps => ps.id === pizzaId)[0];
    const newPizza = {
      size: selectedPizza.sizeName,
      basePrice: selectedPizza.basePrice,
      imgPath: selectedPizza.imgPath
    };
    this.setState({
      pizza: newPizza
    });
  };

  handleSubmitSize() {
    this.setState({
      sizeChosen: true,
    });
    this.createPizza();
  };

  addPizza() {
    this.props.handleAddPizza(this.state.pizza);
  }

  createPizza() {
    const updatedPizza = {
      ...this.state.pizza,
      id: Math.floor((Math.random() * 1000)),
      toppings: [],
      quantity: 1,
      doughType: this.props.data.doughTypes[0]
    }
    this.setState({
      pizza: updatedPizza
    });
  }

  render() {
    let pageContent;
    let footer;
    if (this.state.sizeChosen) {
      pageContent = <Customize
        toppings={this.props.data.toppings}
        doughTypes={this.props.data.doughTypes}
        handleUpdatePizza={this.props.handleUpdatePizza}
        pizza={this.state.pizza} />;
      footer = <div
        className="d-flex justify-content-between col">
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.goBackToSizeChooseScreen}>
          <i
            className="fa fa-chevron-left pr-2"
            aria-hidden="true">
          </i>
          Back
        </button>
        <Link className="text-light" to='/cart'>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.addPizza}>
            Add to cart
              <i
              className="fa fa-chevron-right pl-2"
              aria-hidden="true">
            </i>
          </button>
        </Link>
      </div>;
    } else {
      pageContent = <SizeMenu
        pizzaSizes={this.props.data.pizzaSizes}
        handleSelectSize={this.handleSelectSize}
        selectedSize={this.state.pizza.size} />;
      footer = <div className="d-flex flex-row-reverse col">
        <button
          type="button"
          className="btn btn-success float-right"
          onClick={this.handleSubmitSize}>
          Customize
            <i
            className="fa fa-chevron-right pl-2"
            aria-hidden="true">
          </i>
        </button>
      </div>;
    }
    return (
      <div
        className="d-flex flex-column">
        <div
          className="d-flex justify-content-between align-content-center p-3 theme-primary-color text-light">
          <div>
            <Link
              className="text-light"
              to='/'>
              <span
                className="logo">PZ</span>
              <span className="pl-2 pr-2">
                |
            </span>
              <span>
                Pizzeria
            </span>
            </Link>
          </div>
          <CartLink
            cart={this.props.cart} />
        </div>
        <div
          className="flex-1 p-3 d-flex justify-content-center align-items-center">
          {pageContent}
        </div>
        <div
          className="d-flex align-content-center p-3 theme-primary-color">
          {footer}
        </div>
      </div>
    );
  };
};
