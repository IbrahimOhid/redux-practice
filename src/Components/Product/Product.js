import React from 'react';

const Product = (props) => {
  const {addToCart, product} = props;
    return (
        <div style={{border: '1px solid tomato', marginBottom:'5px'}}>
          <h3>{product.name}</h3>
          <button onClick={() => addToCart(product.id, product.name)}>add to cart</button>   
        </div>
    );
};

export default Product;