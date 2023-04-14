import React, { useState } from 'react';
import useFetch from '../hooks/UseFetch';
import { useEffect } from 'react';
import Category from './Category';

const CategoryList = (props) => {
  //const [category, setCategory] = useState([]);
  const { data } = useFetch('https://fakestoreapi.com/products/categories');
  const [category, setCategory] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);

  function getCurrentCategory(item) {
    setCurrentCategory(item);
  }

  useEffect(() => {
    setCategory(data);
  }, [data]);
  if (category) {
    return (
      <div className={props.classes}>
        <div className="flex flex-wrap gap-1">
          <h2 className="text-2xl w-full">
            Выбранная категория: {currentCategory}
          </h2>
          {category.map((pr, i) => (
            <Category helper={getCurrentCategory} name={pr} key={pr} />
          ))}
        </div>
      </div>
    );
  }
};

export default CategoryList;
