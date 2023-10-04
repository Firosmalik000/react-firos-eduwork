import Component from './materi/component';
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
    </div>
  );
}

export default App;
