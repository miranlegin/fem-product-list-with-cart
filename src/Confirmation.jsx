import React from 'react';

import ConfirmationItem from './ConfirmationItem';

const Confirmation = ({ productsInCart, totalSum, itemQuantity, onDelete }) => {
  return (
    <dialog style={{ display: 'block' }}>
      <h2 className='text-preset-1 text-rose-900'>Order Confirmed</h2>
      <p className='text-preset-3 fw-regular text-rose-500'>
        We hope you enjoy your food!
      </p>
      <ul>
        {productsInCart.map((item) => (
          <ConfirmationItem
            key={item.id}
            item={item}
            itemQuantity={itemQuantity}
          ></ConfirmationItem>
        ))}
      </ul>
      <p>
        <span className='text-preset-4 text-rose-900'>Order Total</span>
        <span className='text-preset-2 text-rose-900'>
          <strong>${totalSum.toFixed(2)}</strong>
        </span>
      </p>
      <button className='button' data-type='primary' onClick={onDelete}>
        Start New Order
      </button>
    </dialog>
  );
};

export default Confirmation;
