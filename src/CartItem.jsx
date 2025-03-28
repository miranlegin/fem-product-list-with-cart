import React from 'react';

const CartItem = ({ item, itemQuantity, onRemove }) => {
  const calculatedPrice = (itemQuantity * item.price).toFixed(2);

  if (!itemQuantity) {
    return;
  }

  return (
    <li className='cart-item'>
      <div className='cart-item-layout'>
        <div className='cart-item-column'>
          <h3 className='text-preset-4 fw-semibold text-rose-900'>
            {item.name}
          </h3>
          <div className='cart-item-pricing'>
            <span className='text-preset-4 fw-semibold text-red'>
              {itemQuantity}x <span className='sr-only'>in cart</span>
            </span>
            <span className='text-preset-4 text-rose-500'>
              @${item.price.toFixed(2)} <span className='sr-only'>each</span>
            </span>
            <span className='text-preset-4 fw-semibold text-rose-500'>
              ${calculatedPrice} <span className='sr-only'>total</span>
            </span>
          </div>
        </div>
        <div>
          <button
            className='button-square'
            data-type='remove'
            onClick={() => {
              onRemove(item.id);
            }}
          >
            <span className='sr-only'>Remove {item.name} </span>
            <svg
              className='icon icon-remove'
              width={20}
              height={20}
              aria-hidden='true'
              focusable='false'
            >
              <use xlinkHref='/assets/icons/symbol-defs.svg#icon-remove'></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
