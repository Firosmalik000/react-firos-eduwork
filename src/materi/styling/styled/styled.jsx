import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 14px 20px;
  font-size: 16px;
  cursor: pointer;
  border-color: #2196f3;
  color: dodgerblue;
  border-radius: 5px;

  &:hover {
    background-color: #60b1f4;
    color: white;
  }
`;

export default class Styled extends React.Component {
  render() {
    return (
      <div>
        <Button className="btn btn-info">Go Eduwork</Button>
      </div>
    );
  }
}
