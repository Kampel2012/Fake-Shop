import React, { useRef } from 'react';
import useOnClickOutside from './hooks/UseClickOutside';
import Counter from './Counter';

// TODO При клике смена состояния модалки с передачей данных.
const ModalWindow = ({
  id,
  title = 'Hello Kity!',
  price,
  category,
  description,
  image,
  helper,
}) => {
  const ref = useRef();
  useOnClickOutside(ref, () => helper(false));
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center z-10 w-screen h-screen overflow-hidden  ">
        <div ref={ref} className="w-[700px] h-[720px] bg-white self-center">
          <h2 className="text-4xl text-emerald-800 text-center pt-5 pb-3 font-semibold">
            {title}
          </h2>
          <div className="h-[420px] w-full my-5">
            <img
              src={image}
              alt="Картинка карточки"
              className="w-full p-1 h-full object-contain block"
            ></img>
          </div>
          <div className="text-center grow pb-5">
            <p className="text-4xl text-slate-800 font-bold grow ">{price} $</p>
          </div>
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
