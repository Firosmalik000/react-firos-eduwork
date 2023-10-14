import { Provider } from 'react-redux';
import { CounterRedux } from './pembahasan/counterPembahasan';
import store from '../app/store';

export const Redux = () => {
  return (
    <div className="text-center">
      <Provider store={store}>
        <CounterRedux />
      </Provider>
    </div>
  );
};
// file2nya ada di folder
// 1. app
// 2. Features/counter
// dimulai dari reducer
