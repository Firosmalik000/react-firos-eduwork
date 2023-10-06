import React from 'react';

export default class FormElement extends React.Component {
  state = {
    nama: '',
    jurusan: '',
    gender: '',
    alamat: '',
    member: false,
  };

  handleSubmit = () => {
    alert(`
    nama: ${this.state.nama}
    juruasan: ${this.state.jurusan}
    gender: ${this.state.gender}
    alamat: ${this.state.alamat}
    member: ${this.state.member ? 'YES' : 'NO'}`);
  };
  render() {
    return (
      <div style={{ margin: '100px auto', border: '1px solid grey', padding: '20px', justifyContent: 'center', display: 'flex' }}>
        <form onSubmit={this.handleSubmit}>
          <label>
            nama : <br />
            <input type="text" name="nama" onChange={(e) => this.setState({ nama: e.target.value }, () => console.log(this.state))} />
          </label>
          <br />
          <label>
            jurusan: <br />
            <select name="jurusan" onChange={(e) => this.setState({ jurusan: e.target.value }, () => console.log(this.state))}>
              <option value="">pilih jurusan</option>
              <option value="sistem informasi">sistem informasi</option>
              <option value="teknik informasi">teknik informasi</option>
              <option value="filsafat">filsafat</option>
            </select>
          </label>
          <br />
          <label>
            jenis kelamin : <br />
            <input type="radio" value={'laki - laki'} name="gender" onChange={(e) => this.setState({ gender: e.target.value }, () => console.log(this.state))} /> Laki-laki{' '}
            <input type="radio" value={'perempuan'} name="gender" onChange={(e) => this.setState({ gender: e.target.value }, () => console.log(this.state))} /> Perempuan
          </label>
          <br />
          <label>
            Alamat: <br />
            <textarea cols="30" rows="10" name="alamat" onChange={(e) => this.setState({ alamat: e.target.value }, () => console.log(this.state))} />
          </label>
          <br />
          <label>
            member: <input type="checkbox" checked={this.state.member} name="member" onChange={(e) => this.setState({ member: e.target.checked }, () => console.log(this.state))} />
          </label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
