import React from 'react';

export default class Variables extends React.Component {
  state = {
    a: '',
    b: null,
    c: true,
    d: 0,
  };
  render() {
    return (
      <div>
        <div>a: {this.state.a}</div>
        <div>b: {this.state.b}</div>
        <div>c: {this.state.c}</div>
        <div>d: {this.state.d}</div>
        <div>d: {this.props.e}</div>
      </div>
    );
  }
}
