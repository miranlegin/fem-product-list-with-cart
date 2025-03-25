import React from 'react';

const Button = ({ product, id, quantity, onIncrease, onDecrease }) => {
  return (
    <div>
      {!quantity ? (
        <button
          className='button'
          data-type='secondary'
          onClick={() => {
            onIncrease(id);
          }}
        >
          <img src='/assets/icons/icon-add-to-cart.svg' alt='' />
          <div className='text-preset-4 fw-semibold'>
            Add
            <span className='sr-only'> {product} </span>
            {` `}to Cart
          </div>
        </button>
      ) : (
        <div className='button' data-type='faux'>
          <button
            className='button-square'
            data-type='quantity'
            onClick={() => {
              onDecrease(id);
            }}
          >
            <span className='sr-only'>Remove 1 {product} </span>
            <svg className='icon icon-subtract'>
              <use xlinkHref='/assets/icons/symbol-defs.svg#icon-subtract'></use>
            </svg>
          </button>
          <div className='text-preset-4 fw-semibold text-white'>{quantity}</div>
          <button
            className='button-square'
            data-type='quantity'
            onClick={() => {
              onIncrease(id);
            }}
          >
            <span className='sr-only'>Add 1 {product} </span>
            <svg className='icon icon-add'>
              <use xlinkHref='/assets/icons/symbol-defs.svg#icon-add'></use>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Button;
