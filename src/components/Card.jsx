import React, { useState } from 'react';
import Counter from './Counter';
import ModalWindow from './ModalWindow';

const Card = ({ id, title, price, category, description, image }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  function closeModal() {
    setModalOpen(false);
  }
  function openModal() {
    setModalOpen(true);
  }

  return (
    <div className="border border-sky-500 p-1 flex flex-wrap content-between text-ellipsis overflow-hidden">
      {isModalOpen ? (
        <ModalWindow
          helper={closeModal}
          image={image}
          title={title}
          price={price}
        />
      ) : (
        <div className="hidden" />
      )}
      <div>
        <div className="h-80 pt-2">
          <img
            src={image}
            alt="Картинка карточки"
            className="w-full p-1 h-full object-contain"
            onClick={openModal}
          ></img>
        </div>
        <div className="px-4">
          <p className="text-right text-2xl text-slate-800 font-bold grow py-3">
            {price} $
          </p>
          <p className="text-center text-2xl text-sky-700 grow">{title}</p>
          <p className="py-4">{description}</p>
        </div>
      </div>
      <div className="grow">
        <Counter />
        <p className="text-right text-sm">category: {category} </p>
        <p className="text-right text-sm"> id: {id}</p>
      </div>
    </div>
  );
};

export default Card;
