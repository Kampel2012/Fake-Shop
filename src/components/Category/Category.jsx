import React from 'react';

const Category = (props) => {
  return (
    <button
      onClick={() => props.helper(props.name)}
      className="px-2 py-1 border border-gray-950 text-lg font-semibold hover:text-orange-400 hover:border-orange-400"
    >
      {props.name}
    </button>
  );
};

export default Category;
