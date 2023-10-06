import Component from './materi/component';
import FormReact from './materi/form/form';
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
    </div>
  );
}

export default App;
