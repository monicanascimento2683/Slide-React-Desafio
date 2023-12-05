import './App.css';
import Slider from './components/Slider';

import arrayImagens from './db/imagens';

function App() {
  return (
    <div className="App">
      <Slider images={arrayImagens} />
    </div>
  );
}

export default App;
