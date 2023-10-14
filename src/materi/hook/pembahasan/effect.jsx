import { useEffect, useState } from 'react';

export const Effect = () => {
  let [tulis, setTulis] = useState('');
  let [user, setUser] = useState([]);
  let [second, setSecond] = useState(0);

  useEffect(() => {
    console.log('get API');
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        console.log(res);
      });
  }, []);
  useEffect(() => {
    localStorage.setItem('tulis', tulis);
    console.log('singkronisasi');
  }, [tulis]);
  //tanpa clean up
  // useEffect(() => {
  //   setInterval(() => {
  //     setSecond((s) => s + 1);
  //   }, 2000);
  // }, []);
  // dengan clean up
  useEffect(() => {
    let intervalId = setInterval(() => {
      setSecond((s) => s + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="text-center flex">
      <h1>Belajar State UseEffect</h1>
      <textarea cols="30" rows="10" onChange={(e) => setTulis(e.target.value)}></textarea>
      <p>isi display= {user.name}</p>

      <div>
        {' '}
        waktu: {Math.floor(second / 60)} menit {second % 60} detik
      </div>
    </div>
  );
};
