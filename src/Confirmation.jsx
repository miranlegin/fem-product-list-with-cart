import React from 'react';

import ConfirmationItem from './ConfirmationItem';

import orderSuccessful from '/assets/icons/icon-order-confirmed.svg';

const Confirmation = ({ productsInCart, totalSum, itemQuantity, onDelete }) => {
  return (
    <dialog open>
      <div className='order'>
        <div className='order-heading'>
          <img src={orderSuccessful} alt='' />
          <h2 className='text-preset-1 text-rose-900'>Order Confirmed</h2>
          <p className='text-preset-3 fw-regular text-rose-500'>
            We hope you enjoy your food!
          </p>
        </div>
        <div className='order-summary'>
          <ul className='orders-list'>
            {productsInCart.map((item) => (
              <ConfirmationItem
                key={item.id}
                item={item}
                itemQuantity={itemQuantity}
              ></ConfirmationItem>
            ))}
          </ul>
          <p className='order-divider flex-between'>
            <span className='text-preset-4 text-rose-900'>Order Total</span>
            <span className='text-preset-2 text-rose-900'>
              <strong>${totalSum.toFixed(2)}</strong>
            </span>
          </p>
        </div>
        <button className='button' data-type='primary' onClick={onDelete}>
          Start New Order
        </button>
      </div>
    </dialog>
  );
};

export default Confirmation;
