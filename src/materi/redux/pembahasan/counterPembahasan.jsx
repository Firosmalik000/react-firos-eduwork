import { useDispatch, useSelector } from 'react-redux';
import { Increment, decrementWitchCheckingAction } from '../../app/features/counter/action';

export const CounterRedux = () => {
  let { count } = useSelector((state) => state.counter);
  //   dispatch = pilot yang mengirim nilai ke action di reducer
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <h1>Belajar Redux</h1>
      {/* ini pake fungsi count di atas */}
      {/* <button onClick={() => dispatch({ type: 'DEC', value: 1 })}>-</button>
      <span>{count.count}</span>
      <button onClick={() => dispatch({ type: 'INC', value: 1 })}>+</button> */}
      {/*  */}
      {/* ini pake fungsi yang ada di file action */}
      {/* <button onClick={() => dispatch(Decrement(1))}>-</button> <span>{count}</span> <button onClick={() => dispatch(Increment(1))}>+</button>
    </div> */}
      {/*  */}
      {/* ini pake redux thunk/ decrementWitchCheckingAction agar berjalan secara asyncronous*/}
      <button onClick={() => dispatch(decrementWitchCheckingAction(1))}>-</button> <span>{count}</span> <button onClick={() => dispatch(Increment(1))}>+</button>
    </div>
  );
};
