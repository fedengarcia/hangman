
import './App.css';
import Router from './Components/Router/Router';
import { MemoTestContext } from './Context/MemoTestContext';

function App() {
  return (
    <div className="App">
      <MemoTestContext>
        <Router/>
      </MemoTestContext>
    </div>
  );
}

export default App;
