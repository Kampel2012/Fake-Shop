import React, { useState } from 'react';
import useFetch from '../hooks/UseFetch';
import { useEffect } from 'react';
import Category from './Category';

const CategoryList = (props) => {
  //const [category, setCategory] = useState([]);
  const { data } = useFetch('https://fakestoreapi.com/products/categories');
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(data);
  }, [data]);
  if (category) {
    return (
      <div className={props.classes}>
        <div className="flex flex-wrap gap-1">
          <h2 className="text-2xl w-full">Категории:</h2>
          {category.map((pr, i) => (
            <Category name={pr} key={pr} />
          ))}
        </div>
      </div>
    );
  }
};

export default CategoryList;
