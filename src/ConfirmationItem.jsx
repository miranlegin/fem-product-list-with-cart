import React from 'react';

const ConfirmationItem = ({ item, itemQuantity }) => {
  const quantity = itemQuantity[item.id];
  const calculatedPrice = (quantity * item.price).toFixed(2);

  if (!quantity) {
    return;
  }

  return (
    <li className='order-item'>
      <div className='order-item-layout'>
        <img
          className='order-image'
          src={item.image.thumbnail}
          width={48}
          height={48}
          alt=''
        />
        <div className='order-item-column'>
          <h3 className='text-preset-4 fw-semibold text-rose-900'>
            {item.name}
          </h3>
          <p className='order-item-pricing'>
            <span className='text-preset-4 fw-semibold text-red'>
              {quantity}x
            </span>
            <span className='text-preset-4 text-rose-500'>
              @${item.price.toFixed(2)}
            </span>
          </p>
        </div>
        <p className='text-preset-3 text-rose-900'>${calculatedPrice}</p>
      </div>
    </li>
  );
};

export default ConfirmationItem;
