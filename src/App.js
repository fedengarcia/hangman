
import './App.css';
import GameContainer from './Components/GameContainer/GameContainer';
import Header from './Components/Header/Header';
import {HangManContext} from './Context/HangManContext'


function App() {
  return (
    <div className="App">
      <Header/>
      <HangManContext>
        <GameContainer/>
      </HangManContext>
    </div>
  );
}

export default App;
