import React from 'react';
import useSWR from 'swr';

import Item from './Item';
import Cart from './Cart';
import Confirmation from './Confirmation';

import './main.scss';

const ENDPOINT = '/data/data.json';

async function fetcher(endpoint) {
  const result = await fetch(endpoint);
  const json = await result.json();

  // const productWithID = json.map((product) => ({
  //   ...product,
  //   id: crypto.randomUUID(),
  // }));

  return json;
}

function App() {
  const { data, error, isLoading } = useSWR(ENDPOINT, fetcher);

  // React.useEffect(() => {
  //   async function runEffect() {
  //     const result = await fetch(ENDPOINT);
  //     const data = await result.json();
  //     return data;
  //   }
  // }, []);

  const [cart, setCart] = React.useState({
    4: 40,
    9: 90,
    7: 70,
    2: 20,
  });

  // extract productID from cart array
  const productIDsInCart = Object.keys(cart).map((el) => el);

  // filter from data products that have ID's in cart
  // this is not right because when we filter over data data.json which is the result of data variable if sorted from "a" to "i" meaning we are already filtering over alphabetically sorted array which is not what the cart array holds, we somehow need to preserve the order in the cart array
  const productsInCart = data?.filter((item) =>
    productIDsInCart.includes(item.id)
  );

  // console.log(productsInCart);

  // number of individual items in cart
  let totalQuantity = 0;

  if (!isLoading) {
    totalQuantity = Object.values(cart).reduce((acc, item) => acc + item, 0);
  }

  console.log(cart);

  // order total to pay
  let totalSum = 0;

  if (!isLoading) {
    Object.entries(cart).forEach(([key, value]) => {
      const item = data.find((item) => item.id === key);
      if (item) {
        totalSum += item.price * value;
      }
    });
  }
  // console.log({ totalSum });

  function increaseQuantity(id) {
    const cartId = cart[id] || 0;

    const nextValue = cartId + 1;

    const nextItems = {
      ...cart,
      [id]: nextValue,
    };

    setCart(nextItems);
  }

  function decreaseQuantity(id) {
    const nextValue = cart[id] - 1;

    const nextItems = {
      ...cart,
      [id]: nextValue,
    };

    setCart(nextItems);
  }

  function removeFromCart(id) {
    setCart((oldItems) =>
      Object.fromEntries(
        Object.entries(oldItems).filter(([item]) => item !== id)
      )
    );
  }

  function emptyCart() {
    if (confirm('are you sure?')) {
      setCart({});
    }
  }

  return (
    <>
      <div className='wrapper'>
        <div className='page-layout'>
          <main>
            <h1 className='text-preset-1 text-rose-900'>Desserts</h1>
            {/* <h2>List of desserts</h2> */}
            <div className='cards-list'>
              {!isLoading ? (
                data?.map((item) => (
                  <Item
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    key={item.id}
                    item={item}
                    cart={cart}
                  ></Item>
                ))
              ) : (
                <p>Loading desserts...</p>
              )}
            </div>
          </main>
          <aside>
            <Cart
              isLoading={isLoading}
              productsInCart={productsInCart}
              cart={cart}
              totalSum={totalSum}
              totalQuantity={totalQuantity}
              removeFromCart={removeFromCart}
            />
          </aside>
        </div>
      </div>
      {/* {totalSum > 0 && (
        <Confirmation
          totalSum={totalSum}
          productsInCart={productsInCart}
          itemQuantity={cart}
          onDelete={emptyCart}
        ></Confirmation>
      )} */}
    </>
  );
}

export default App;
