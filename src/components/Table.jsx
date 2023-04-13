import React, { useState, useEffect } from 'react';
import Card from './Card';
import useFetch from './hooks/UseFetch';
import CategoryList from './Category/CategoryList';

const Table = (props) => {
  const { data } = useFetch('https://fakestoreapi.com/products');
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(data);
  }, [data]);

  if (cards) {
    return (
      <div>
        <CategoryList classes="mt-5" />
        <p className="text-3xl text-center py-5">Продукция</p>
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {cards.map((pr, i) => (
            <Card
              id={pr.id}
              title={pr.title}
              price={pr.price}
              category={pr.category}
              description={pr.description}
              image={pr.image}
              key={pr.id}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default Table;
