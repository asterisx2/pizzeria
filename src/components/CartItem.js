import React from 'react';

const getDescription = (toppings) => {
  let desc = toppings.reduce((str, top) => str += top.name + ', ', '');
  return desc.substring(0, desc.length - 2);
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const calculateTotal = (pizza) => {
  return pizza.quantity * (pizza.basePrice + pizza.doughType.price + pizza.toppings.reduce((sum, top) => sum += top.price, 0));
}

export default ({ pizza, removePizza }) => {
  return (
    <div 
      className="d-flex justify-content-between pt-2 pb-2">
      <div 
        className="d-flex">
        <img 
          src={pizza.imgPath} 
          className="fluid-img-large" 
          alt="" />
        <div 
          className="d-flex flex-column text-left pl-2">
          <span 
            className="font-small color-orange">
            Size: {capitalizeFirstLetter(pizza.size)}
          </span>
          <span 
            className="font-small color-orange">
            Dough: {pizza.doughType.name}
          </span>
          <span 
            className="text-primary font-italic font-weight-light font-small">
            {getDescription(pizza.toppings)}
          </span>
        </div>
      </div>
      <div 
        className="d-flex flex-column text-right justify-content-between">
        <i 
          className="fa fa-times-circle cursor-pointer text-danger mt-2" 
          aria-hidden="true" 
          onClick={removePizza}></i>
        <span 
          className="font-small">
          &euro;{calculateTotal(pizza).toFixed(2)}
        </span>
      </div>
    </div>
  )
}