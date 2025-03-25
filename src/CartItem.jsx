import React from 'react';

const CartItem = ({ item, itemQuantity, onRemove }) => {
  const calculatedPrice = (itemQuantity * item.price).toFixed(2);

  if (!itemQuantity) {
    return;
  }

  return (
    <li className='cart-item'>
      <div style={{ flex: 1 }}>
        <h3 className='text-preset-4 fw-semibold text-rose-900'>{item.name}</h3>
        <p>
          <span className='text-preset-4 fw-semibold text-red'>
            {itemQuantity}x
          </span>{' '}
          <span className='text-preset-4 text-rose-500'>
            @${item.price.toFixed(2)}
          </span>
          <span className='text-preset-4 fw-semibold text-rose-500'>
            ${calculatedPrice}
          </span>
        </p>
      </div>
      <button
        className='button-square'
        data-type='remove'
        onClick={() => {
          onRemove(item.id);
        }}
      >
        <span className='sr-only'>Remove {item.name} </span>
        <svg className='icon icon-remove'>
          <use xlinkHref='/assets/icons/symbol-defs.svg#icon-remove'></use>
        </svg>
      </button>
    </li>
  );
};

export default CartItem;
