import React from 'react';
import Button from './Button';

const Item = ({ item, cart, increaseQuantity, decreaseQuantity }) => {
  const isOutline = cart[item.id] ? 'item-outline' : null;

  return (
    <article>
      <div>
        <div className='item-image' data-state={isOutline}>
          <img
            width={508}
            height={480}
            src={item.image.desktop}
            alt='Waffle with Berries'
          />
        </div>
        <div style={{ minHeight: '46px', transform: 'translateY(-50%)' }}>
          <Button
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            quantity={cart[item.id]}
            product={item.name}
            id={item.id}
          />
        </div>
      </div>

      <div className='item-description'>
        <p className='text-preset-4 text-rose-500'>{item.category}</p>
        <h3 className='text-preset-3 text-rose-900'>{item.name}</h3>
        <p className='text-preset-3 text-red'>${item.price.toFixed(2)}</p>
      </div>
    </article>
  );
};

export default Item;
