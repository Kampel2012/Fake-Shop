import React from 'react';
import GetInfoAboutProduct from './GetInfoAboutPruduct';
import useFetch from './hooks/UseFetch';
import MyButton from './MyButton';

const Cart = (props) => {
  let { data } = useFetch('https://fakestoreapi.com/carts/1');

  if (data) {
    return (
      <div className="bg-orange-100">
        <h1 className="text-3xl">Корзина:</h1>
        User id: {data.userId}
        {data.products.map((item, i) => (
          <div key={item.productId} className="py-2">
            <p>Позиция: {i + 1}</p>
            <span className="text-xl">Название продукта:</span>
            <GetInfoAboutProduct id={item.productId} />
            <p className="text-xl">
              {' '}
              количество в корзине:{' '}
              <span className="font-semibold">{item.quantity}</span>
            </p>
            <p> id продукта: {item.productId} </p>
            <MyButton name="Удалить из корзины" />
            <hr />
          </div>
        ))}
      </div>
    );
  }
};

export default Cart;
