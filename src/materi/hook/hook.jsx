import { useState } from 'react';
import { CounterHook } from './pembahasan/counteruseState';
import { Effect } from './pembahasan/effect';
import { Identity } from './pembahasan/identity';
import { useToogle } from './pembahasan/custonHook';

export const Hooks = () => {
  let [label, setLabel] = useState('ON');
  let [lampu, setLampu] = useToogle();
  const style = {
    background: lampu ? 'yellow' : 'black',
    textAlign: 'center',
    height: '400px',
  };
  const saklar = () => {
    setLampu(!lampu);
    setLabel((e) => {
      if (e === 'ON') {
        return 'OFF';
      }
      return 'ON';
    });
  };
  return (
    <>
      <CounterHook />
      <Effect />
      <Identity />
      <div style={style}>
        <button onClick={saklar}>{label}</button>
      </div>
    </>
  );
};
