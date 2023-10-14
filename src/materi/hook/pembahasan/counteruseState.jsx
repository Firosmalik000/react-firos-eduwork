import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
export const CounterHook = () => {
  let [angka, setAngka] = useState(0);
  return (
    <>
      <h1 className="text-center">Belajar Hook : useState</h1>
      <div className="text-center flex justify-center">
        <button onClick={() => setAngka(angka - 1)}>-</button> <span>{angka}</span> <button onClick={() => setAngka(angka + 1)}>+</button>
      </div>
    </>
  );
};
