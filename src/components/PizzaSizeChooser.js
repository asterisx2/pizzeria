import React from 'react';

const buildClass = (selected) => {
  let otherClasses = 'border d-flex justify-content-between align-items-center mt-2 p-2 hover-dark';
  let selectedClass = selected ? ' selected' : '';
  return otherClasses + selectedClass;
}

const getImageSize = size => {
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

export default ({
    pizzaId,
    sizeName,
    pizzaImg,
    basePrice,
    selected,
    onSelected
}) => {
  return (
        <div 
            className={buildClass(selected)} 
            onClick={() => onSelected(pizzaId)}>
            <img 
                src={pizzaImg} 
                height={getImageSize(sizeName)} 
                alt="" />
            <div 
                className="d-flex flex-column text-right">
                <span 
                    className="ml-2 text-secondary font-large pl-6 pr-2">
                    {sizeName}
                </span>
                <span 
                    className="text-primary font-italic font-weight-light">
                    Starting from &euro;{basePrice.toFixed(2)}
                </span>
            </div>
        </div>
  )
}