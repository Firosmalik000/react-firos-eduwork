import React from 'react';
import Counter from '../counter/counter';
import styled from 'styled-components';

const imgProduct = ``;

const CardContainer = styled.div`
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
`;
const Image = styled.img`
  width: 300;
`;
const Heading = styled.h1`
  font-size: 18px;
`;
const Price = styled.p`
  color: grey;
  fonst-size: 22px;
`;

const Description = styled.p`
  font-size: small;
`;
export default class Product extends React.Component {
  handleValue = (value) => {
    this.props.receiveValue(value);
  };
  render() {
    return (
      <>
        <CardContainer>
          <Image src={imgProduct} />
          <Heading>Title Card</Heading>
          <Price>$199</Price>
          <Description>lorem ipsum dolor</Description>
          <Counter receiveValue={this.handleValue} />
        </CardContainer>
      </>
    );
  }
}
