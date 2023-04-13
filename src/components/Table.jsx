import React from 'react';
import Card from './Card';
import useFetch from './hooks/UseFetch';

const Table = (props) => {
  let { data } = useFetch('https://fakestoreapi.com/products');

  if (data) {
    return (
      <div>
        <p className="text-3xl text-center py-5">Продуктусы</p>
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.map((pr, i) => (
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
