import React from 'react';
import propTypes from 'prop-types';

class ClassComponent extends React.Component {
  state = {
    value: 0,
  };

  handlePlus = () => {
    this.setState({ value: this.state.value + 1 });
  };
  handleMin = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  };
  render() {
    return (
      <div>
        <h1>component ini di buat dengan class component</h1>
        <h2>hello {this.props.nama}</h2>
        <button onClick={this.handleMin}>-</button>
        <span>
          {' '}
          {''} {this.state.value} {''}{' '}
        </span>
        <button onClick={this.handlePlus}>+</button>
      </div>
    );
  }
}
// menggunakan isrequired (salah satu typr data dari props) maka props harus diisi (didalam index.jsx), jika kosong dan menggunakan default maka akan eror
ClassComponent.propTypes = {
  nama: propTypes.string.isRequired,
};
export default ClassComponent;
