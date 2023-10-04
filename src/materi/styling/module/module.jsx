import React from 'react';
import style from './style.module.css';

export default class CobaModule extends React.Component {
  render() {
    return (
      <div>
        <button className={`${style.btn}  ${style.btnInfo}`}>Go Eduwork</button>
      </div>
    );
  }
}
