import React from 'react';

const Category = (props) => {
  return (
    <button className="px-2 py-1 border border-gray-950 text-lg font-semibold">
      {props.name}
    </button>
  );
};

export default Category;
