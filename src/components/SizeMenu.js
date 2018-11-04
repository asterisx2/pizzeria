import React from 'react';
import PizzSizeChooser from './PizzaSizeChooser';

export default ({ 
  pizzaSizes,
  handleSelectSize, 
  selectedSize 
}) => {
  return (
    <section>
      <div 
        className="d-flex flex-column">
        <h4 
          className="border-bottom-black text-left pb-2 mb-2">
          Select a size
        </h4>
        {pizzaSizes.map(pizzaSize => {
          return (
            <PizzSizeChooser
              key={pizzaSize.id}
              pizzaId={pizzaSize.id}
              sizeName={pizzaSize.sizeName}
              pizzaImg={pizzaSize.imgPath}
              checkBoxName={'pizzaSize'}
              basePrice={pizzaSize.basePrice}
              selected={selectedSize === pizzaSize.sizeName}
              onSelected={handleSelectSize}
            />
          );
        })}
      </div>
    </section>
  );
};
