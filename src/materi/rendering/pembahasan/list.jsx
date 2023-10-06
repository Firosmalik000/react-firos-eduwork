import React from 'react';

export default class ListRendering extends React.Component {
  state = {
    user: ['firos', 'reza', 'salman', 'akmal'],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.user.map((users, i) => (
            <li key={i}>{users}</li>
          ))}
        </ul>
      </div>
    );
  }
}
