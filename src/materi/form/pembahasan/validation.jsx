import React from 'react';

// import * as Validator from 'validatorjs';
const Input = ({ label, type, name, onChange }) => {
  return (
    <div>
      <label>{label}:</label>
      <br />
      <input type={type} name={name} onChange={(e) => onChange(e.target.value)} />
      <br />
    </div>
  );
};

const ShowError = ({ error }) => {
  return (
    <ul style={{ color: 'red', marginLeft: '-20px' }}>
      {error.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
};
export default class Validation extends React.Component {
  state = {
    email: '',
    password: '',
    error: [],
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    const { email, password } = this.state;
    // let data = { email, password };

    // let rules = {
    //   email: 'required|email',
    //   password: 'min:8|required',
    // };
    // let validation = new Validator(data, rules);
    // validation.passes();
    // this.setState({
    //   errors: [...validation.errors.get('email'), ...validation.errors.get('password')],
    // });
    let message = [];
    if (email.length === 0) {
      message = [...message, 'Email tidak boleh kosong'];
    }
    if (password.length < 8) {
      message = [...message, 'Password minimal terdiri dari 8 huruf'];
    }
    if (password.length === 0) {
      message = [...message, 'password tidak boleh kosong'];
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      message = [...message, 'Email tidak valid'];
    }
    if (message.length > 0) {
      this.setState(
        {
          error: message,
        },
        () => console.log(this.state.error)
      );
    } else {
      alert(`
        email : ${this.state.email}
        password : ${this.state.password}`);
      this.setState({
        error: [],
      });
    }
  };

  render() {
    const style = {
      width: '400px',
      margin: '100px auto 0',

      justifyContent: 'center',
      textAlign: 'center',
      padding: '10px',
      backgroundColor: 'lightblue',
      borderRadius: '10px',
    };
    return (
      <div style={style}>
        {this.state.error && <ShowError error={this.state.error} />}
        <h4>Login Page</h4>
        <form onSubmit={this.handleSubmit}>
          <Input type="email" name="email" label="Email" onChange={(value) => this.setState({ email: value })} />
          <Input type="password" name="password" label="Password" onChange={(value) => this.setState({ password: value })} />
          <br />
          <button type="submit">login</button>
        </form>
      </div>
    );
  }
}
