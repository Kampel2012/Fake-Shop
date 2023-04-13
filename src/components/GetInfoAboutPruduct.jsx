import React from 'react';
import useFetch from './hooks/UseFetch';

const GetInfoAboutProduct = ({ id }) => {
  let { data } = useFetch(`https://fakestoreapi.com/products/${id}`);
  if (data) {
    return (
      <span className="text-xl text-cyan-800 font-semibold">
        {' '}
        "{data.title}"
      </span>
    );
  }
};

export default GetInfoAboutProduct;
