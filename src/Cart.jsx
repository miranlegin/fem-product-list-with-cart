import React from 'react';
import CartItem from './CartItem';

import emptyCart from '/assets/icons/illustration-empty-cart.svg';

const Cart = ({
  isLoading,
  productsInCart,
  cart,
  totalSum,
  totalQuantity,
  removeFromCart,
}) => {
  if (!totalSum) {
    return (
      <div className='frame'>
        <h2 className='text-preset-2 text-red'>Your Cart ({totalQuantity})</h2>
        <img src={emptyCart}></img>
        <p className='text-preset-4 fw-semibold text-rose-500'>
          Your added items will appear here
        </p>
      </div>
    );
  }

  return (
    <div className='frame'>
      <h2 className='text-preset-2 text-red'>Your Cart ({totalQuantity})</h2>
      <ul className='cart-list'>
        {!isLoading &&
          productsInCart.map((item) => (
            <CartItem
              item={item}
              key={item.id}
              itemQuantity={cart[item.id]}
              onRemove={removeFromCart}
            ></CartItem>
          ))}
      </ul>
      <div className='cart-divider flex-between'>
        <span className='text-preset-4 text-rose-900'>Order Total</span>
        <span className='text-preset-2 text-rose-900'>
          ${totalSum.toFixed(2)}
        </span>
      </div>
      <div className='banner'>
        <img
          width={20}
          height={20}
          src='/assets/icons/icon-carbon-neutral.svg'
          alt=''
        />
        <p className='text-preset-4 text-rose-900'>
          This is a <strong>carbon-neutral</strong> delivery
        </p>
      </div>
      <button className='button' data-type='primary'>
        Confirm Order
      </button>
    </div>
  );
};

export default Cart;
