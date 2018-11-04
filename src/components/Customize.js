import React from 'react';
import PropTypes from 'prop-types';


export default class Customize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: this.props.pizza,
      grandTotal: this.props.pizza.basePrice
    };

    this.handleToppingChange = this.handleToppingChange.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
    this.handleDoughChange = this.handleDoughChange.bind(this);
    this.updatePizza = this.updatePizza.bind(this);
  }

  static proptypes = {
    handleUpdatePizza: PropTypes.func.isRequired,
    toppings: PropTypes.arrayOf(
            PropTypes.shape({
              __typename: PropTypes.string.isRequired,
              name: PropTypes.string.isRequired,
              price: PropTypes.number.isRequired
            }).isRequired
        ).isRequired,
    doughTypes: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              name: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
              price: PropTypes.number.isRequired
            }).isRequired
        ).isRequired,
    pizza: {
      id: PropTypes.number.isRequired,
      size: PropTypes.string.isRequired,
      toppings: PropTypes.arrayOf(
                PropTypes.shape({
                  __typename: PropTypes.string.isRequired,
                  name: PropTypes.string.isRequired,
                  price: PropTypes.number.isRequired
                }).isRequired
            ).isRequired,
      basePrice: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      doughType: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      }).isRequiredy
    }
  };


  updatePizza() {
    this.props.handleUpdatePizza(this.state.pizza);
  }

  handleToppingChange(topping) {
    let newToppings = this.state.pizza.toppings.includes(topping)
            ? this.state.pizza.toppings.filter(top => top !== topping)
            : this.state.pizza.toppings.concat(topping);
    let newPizza = this.state.pizza;
    newPizza.toppings = newToppings;
    this.setState({ pizza: newPizza });
    this.updateTotal();
  }

  handleDoughChange(dough) {
    let newPizza = this.state.pizza;
    newPizza.doughType = dough;
    this.setState({ pizza: newPizza });
    this.updateTotal();
  }

  updateTotal() {
    let sum = this.state.pizza.basePrice +
            this.state.pizza.doughType.price +
            this.state.pizza.toppings.reduce((sum, topping) => sum += topping.price, 0);
    this.setState({ grandTotal: sum });
    this.updatePizza();
  }

  render() {
    return (
            <div 
                className="h-100 d-flex flex-column w-100">
                <div>
                    <h4 
                        className="border-bottom-black text-left pb-2 mb-2">
                        Customize your pizza
                    </h4>
                </div>
                <div 
                    className="flex-1 overflow-y-auto mb-2">
                    <div 
                        className="accordion h-100 overflow-y-auto" 
                        id="accordion">
                        <div 
                            className="card show">
                            <div 
                                className="cursor-pointer card-header theme-primary-color text-left d-flex justify-content-between align-items-center" 
                                id="toppingDough"
                                data-toggle="collapse"
                                data-target="#doughDiv"
                                aria-expanded="true"
                                aria-controls="collapseOne">
                                <h5 className="mb-0 text-light">
                                    Dough
                                </h5>
                                <i className="fa fa-caret-down text-light" aria-hidden="true"></i>
                            </div>
                            <div
                                id="doughDiv"
                                className="collapse show"
                                aria-labelledby="toppingDough"
                                data-parent="#accordion">
                                <div 
                                    className="card-body">
                                    {this.props.doughTypes.map(dough => {
                                      return (
                                            <div 
                                                key={dough.id} 
                                                className="w-100">
                                                <label 
                                                    className="w-100">
                                                    <div 
                                                        className="d-flex justify-content-between">
                                                        <div 
                                                            className="text-left">
                                                            <div 
                                                                className="d-flex">
                                                                <input
                                                                    type="radio"
                                                                    onChange={() =>
                                                                        this.handleDoughChange(dough)
                                                                    }
                                                                    name={'dough'}
                                                                    className="mt-1"
                                                                    value={dough.id}
                                                                />
                                                                <div 
                                                                    className="ml-2">
                                                                    <span>
                                                                        {dough.name}
                                                                    </span>
                                                                    <p 
                                                                        className="font-weight-light font-italic">
                                                                        {dough.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span 
                                                            className="color-orange">
                                                            &euro;{dough.price.toFixed(2)}
                                                        </span>
                                                    </div>
                                                </label>
                                            </div>
                                      )
                                    })}
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div 
                            className="card show">
                            <div 
                                className="cursor-pointer card-header theme-primary-color text-left d-flex justify-content-between align-items-center" 
                                id="toppingHeading"
                                data-toggle="collapse"
                                data-target="#toppingsDiv"
                                aria-expanded="true"
                                aria-controls="collapseOne">
                                <h5 
                                    className="mb-0 text-light">
                                    Toppings
                                </h5>
                                <i 
                                    className="fa fa-caret-down text-light" 
                                    aria-hidden="true">
                                </i>
                            </div>
                            <div
                                id="toppingsDiv"
                                className="collapse show"
                                aria-labelledby="toppingHeading"
                                data-parent="#accordion">
                                <div className="card-body">
                                    {this.props.toppings.map(topping => {
                                      return (
                                            <div 
                                                className="w-100" 
                                                key={topping.name}>
                                                <label 
                                                    className="w-100">
                                                    <div 
                                                        className="d-flex justify-content-between">
                                                        <div>
                                                            <input
                                                                type="checkbox"
                                                                onChange={() =>
                                                                    this.handleToppingChange(topping)
                                                                }
                                                                name={topping.name}
                                                                value={topping.name}
                                                                className="mr-2"
                                                            />
                                                            {topping.name}
                                                        </div>
                                                        <span 
                                                            className="color-orange">
                                                            &euro;{topping.price.toFixed(2)}
                                                        </span>
                                                    </div>
                                                </label>
                                                <br />
                                            </div>
                                      )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div 
                    className="d-flex justify-content-between flex-row border-top-blue mt-2 pt-2">
                    <div className="d-flex flex-column justify-content-between">
                        <img 
                            src="../../pizza.png" 
                            className="fluid-img d-block" 
                            alt="" />
                        <span>
                            Size: {this.state.pizza.size.toUpperCase()}
                        </span>
                    </div>
                    <div className="d-flex flex-column justify-content-between">
                        <span 
                            className="d-block">
                            Grand Total
                        </span>
                        <span 
                            className="text-primary">
                            &euro;{this.state.grandTotal.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
    )
  }
}
