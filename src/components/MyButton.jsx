import React from 'react';

const MyButton = ({ helper, name }) => {
  return (
    <button
      className="px-2 py-1 m-1 bg-transparent border-2 font-semibold rounded-lg border-solid border-teal-600 text-lg leading-none text-violet-800 hover:bg-lime-100 hover:bg-opacity-50"
      onClick={helper}
    >
      {name}
    </button>
  );
};

export default MyButton;
