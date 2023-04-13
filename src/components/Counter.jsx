import React, { useState } from 'react';
import MyButton from './MyButton';

const Counter = (props) => {
  const [count, setCount] = useState(0);

  function inc(params) {
    setCount(count + 1);
  }

  function dec(params) {
    if (count >= 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="text-center grow p-2">
      <MyButton name="-" helper={dec} />
      <span className="text-xl mx-2">Количество: {count}.</span>
      <MyButton name="+" helper={inc} />
      <MyButton name="Добавить в корзину" />
    </div>
  );
};

export default Counter;
