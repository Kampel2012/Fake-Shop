import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/* const fetchData = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
fetchData(); */
