import React from 'react';
import Plain from './plain/plain.jsx';
import Inline from './inline/inline.jsx';
import CobaModule from './module/module.jsx';
import Styled from './styled/styled.jsx';
import Bootstrap from './bootstrap/bootstrap.jsx';

export default class Styling extends React.Component {
  render() {
    return (
      <div>
        <Bootstrap />
        <Plain />
        <Inline />
        <CobaModule />
        <Styled />
      </div>
    );
  }
}
