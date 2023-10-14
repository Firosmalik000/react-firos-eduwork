import * as counter from './constans';

let initialState = {
  count: 0,
};
export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    // inc = increment
    case counter.INC:
      return {
        // copy state dengan rest parameter,dan di timpa dengan yang baru
        ...state,
        // action.value=mengirim value biar makin dinamis
        count: state.count + action.value,
      };
    //   DEC = decrement
    case counter.DEC:
      return {
        count: state.count - action.value,
      };
    //   nilai default
    default:
      return state;
  }
};
