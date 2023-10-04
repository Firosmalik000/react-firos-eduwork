// pake arrow function seperti langsubng return jika hanya 1 element

import { useState } from 'react';

// const FunctionalComponent = () => <h1>membuat component dengan functionalComponent</h1>;

// jika lebih dari 1 tetap menggunakan return
const FunctionalComponent = ({ nama }) => {
  const [value, setValue] = useState(0);

  const handleMin = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  const handlePlus = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <h1>Membuat component dengan functional component</h1>
      <h2>Hello {nama}, selamat belajar</h2>
      <button onClick={handleMin}>-</button>
      <span>
        {''}
        {'  '}
        {value}
        {''}{' '}
      </span>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

// membuat props default misal props tidak diisi nama
FunctionalComponent.defaultProps = {
  nama: 'User', // ini akan menjadi default value, tp kalau di beri props di index.jsx maka akan di tampilkan props, bukan defaultnya
};
export default FunctionalComponent;
