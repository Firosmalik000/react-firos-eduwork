import Component from './materi/component';
import FormReact from './materi/form/form';
import { Hooks } from './materi/hook/hook';
import LifeCycle from './materi/lifecycle/lifecycle';
import { Redux } from './materi/redux/redux';
import Rendering from './materi/rendering/rendering';
import Reusable from './materi/reusable';
import Bootstrap from './materi/styling/bootstrap/bootstrap';
import Styling from './materi/styling/index.jsx';
function App() {
  return (
    <div className="App">
      <Bootstrap />
      <Component />
      <Styling />
      <Reusable />
      <Rendering />
      <FormReact />
      <LifeCycle />
      <Hooks />
      <Redux />
    </div>
  );
}

export default App;
