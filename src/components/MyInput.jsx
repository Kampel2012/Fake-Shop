import React, { useState } from "react"

const MyInput = (props) => {
  let [inpValue, setinpValue] = useState('')

  let changeInpValue = (e) => {
    setinpValue(e.target.value)
  }

  return (
    <div className="container mx-auto my-10 text-center text-xl">
      <p className="my-2">Название: { props.name }</p>
      <input placeholder="Введите текст" className="border-4 border-solid border-teal-600 p-2 w-64" onChange = { (e) => changeInpValue(e) }></input>
      <p>Значение: { inpValue }</p>
    </div>
  )
};

export default MyInput;
