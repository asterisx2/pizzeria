import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      ordered: false
    };

    this.calculateTotal = this.calculateTotal.bind(this);
    this.removePizza = this.removePizza.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  static propTypes = {
    handleRemovePizza: PropTypes.func.isRequired,
    cart: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        size: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        basePrice: PropTypes.number.isRequired,
        toppings: PropTypes.arrayOf(
          PropTypes.shape({
            __typename: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
          }).isRequired
        ).isRequired
      }).isRequired
    ).isRequired
  };

  async removePizza(pizzaId) {
    await this.props.handleRemovePizza(pizzaId);
    this.calculateTotal();
  }

  handleConfirm() {
    this.removepizza();
    this.setState({ ordered: true });
  }

  calculateTotal() {
    let sum = 0;
    this.props.cart.forEach(pizza => {
      sum +=
        (pizza.basePrice +
          pizza.doughType.price +
          pizza.toppings.reduce((topSum, top) => (topSum += top.price), 0)) *
        pizza.quantity;
    });
    this.setState({
      total: sum
    });
  }

  componentDidMount() {
    this.calculateTotal();
  }

  removepizza() {
    this.props.cart.forEach(pizza => {
      this.props.handleRemovePizza(pizza.id);
    });
  }

  getImageSize(size) {
    switch (size) {
    case 'small':
      return '60px';
  
    case 'medium':
      return '70px';
  
    case 'large':
      return '80px';
  
    default:
      return '100px';
    }
  };

  render() {
    let pageContent;
    let footer;
    if (this.state.ordered) {
      pageContent = (
        <section>
          <div>
            <i 
              className="fa fa-check-circle shopping-cart-icon-large" 
              aria-hidden="true"/>
            <h1
              className="mt-2">
              Your order is on its way
            </h1>
          </div>
        </section>
      );
      footer = (
        <div 
          className="d-flex justify-content-center col">
          <Link 
            className="text-light" 
            to="/">
            <button 
              type="button" 
              className="btn btn-success">
              <i 
                className="fa fa-shopping-cart pr-2" 
                aria-hidden="true" />
              Order More Pizzas
            </button>
          </Link>
        </div>
      );
    } else if (this.props.cart.length === 0) {
      pageContent = (
        <section>
          <div>
            <i 
              className="fa fa-exclamation-circle shopping-cart-icon-large" 
              aria-hidden="true"></i>
            <h1
              className="mt-2">
              Your cart is empty
            </h1>
          </div>
        </section>
      );
      footer = (
        <div
          className="d-flex justify-content-center col">
          <Link 
            className="text-light" 
            to="/">
            <button
              type="button" 
              className="btn btn-success">
              <i 
                className="fa fa-shopping-cart pr-2" 
                aria-hidden="true" />
              Add Some Pizzas
            </button>
          </Link>
        </div>
      );
    } else {
      pageContent = (
        <div 
          className="fluid-width h-100">
          <h1>
            <i 
              className="fa fa-shopping-cart pr-2" 
              aria-hidden="true" />
            Your Cart
          </h1>
          <div>
            <div>
              {this.props.cart.map(pizza => {
                return (
                  <CartItem
                    key={pizza.id}
                    pizza={pizza}
                    removePizza={() => this.removePizza(pizza.id)}/>
                );
              })}
            </div>
            <div 
              className="w-100 d-flex justify-content-between font-medium mt-4">
              <span>
                Order Total: 
              </span>
              <span>
                &euro;
                {this.state.total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      );
      footer = (
        <div 
          className="d-flex justify-content-between col">
          <Link 
            className="text-light" 
            to="/">
            <button 
              type="button" 
              className="btn btn-primary">
              <i 
                className="fa fa-shopping-cart pr-2" 
                aria-hidden="true" />
              Add More Pizzas
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.handleConfirm}>
            <i className="fa fa-check pr-2" aria-hidden="true" />
            Confim Order
          </button>
        </div>
      );
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
                className="logo">
                PZ
              </span>
              <span className="pl-2 pr-2">
                | 
              </span>
              <span>
                Pizzeria
              </span>
            </Link>
          </div>
        </div>
        <div 
          className="flex-1 p-3 d-flex justify-content-center align-items-center overflow-y-auto">
          {pageContent}
        </div>
        <div 
          className="d-flex align-content-center p-3 theme-primary-color">
          {footer}
        </div>
      </div>
    );
  }
}
