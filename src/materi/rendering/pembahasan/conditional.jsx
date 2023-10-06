import React from 'react';

export default class Conditional extends React.Component {
  state = {
    isLoading: true,
  };
  render() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);

    // let message = '';
    // const isLogin = false;
    // if (isLogin) {
    //   return <div>selamat datang </div>;
    // } else {
    //   return <h1>login lagi</h1>;
    // }
    //    /
    // if (isLogin) {
    //   message = 'Selamat Datang';
    // } else {
    //   message = 'Silahkan Login Lagai';
    // }

    // return <div>{message}</div>;
    // return <div>{isLogin ? <h1>selamat datang</h1> : <h1>login lagi</h1>}</div>;

    return <div>{this.state.isLoading ? <h1>Loading...</h1> : <h3>Selamat datang di kegabutanku</h3>}</div>;
  }
}
