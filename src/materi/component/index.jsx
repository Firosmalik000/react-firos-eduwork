import React from 'react';
import ClassComponent from './pembahasan/ClassComponent.jsx';
import FunctionalComponent from './pembahasan/FunctionalComponent.jsx';

export default class Component extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent nama="firos malik" />
        <FunctionalComponent />
      </div>
    );
  }
}
