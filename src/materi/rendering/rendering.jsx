import React from 'react';
import Variables from './pembahasan/variable';
import Conditional from './pembahasan/conditional';
import ListRendering from './pembahasan/list';

export default class Rendering extends React.Component {
  render() {
    return (
      <div>
        <Variables />
        <Conditional />
        <ListRendering />
      </div>
    );
  }
}
