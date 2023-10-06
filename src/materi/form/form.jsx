import React from 'react';
import FormElement from './pembahasan/formElement';
import Validation from './pembahasan/validation';

export default class FormReact extends React.Component {
  render() {
    return (
      <div>
        <FormElement />
        <Validation />
      </div>
    );
  }
}
