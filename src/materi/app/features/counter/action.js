import * as counter from './constans';
export const Increment = (value) => {
  return {
    type: counter.INC,
    value: value,
  };
};

export const Decrement = (value) => {
  return {
    type: counter.DEC,
    value: value,
  };
};

export const decrementWitchCheckingAction = (value) => {
  return (dispatch, getState) => {
    // membuat fungsi berjalan seperti asyncronous
    if (getState().counter.count > 0) {
      dispatch(Decrement(value));
    }
  };
};
