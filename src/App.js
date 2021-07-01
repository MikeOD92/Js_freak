import './App.css';
import Octave from './components/Octave';
import Keys from './components/Keys';
import  Drumpad from './components/Drumpad';
import Sequencer from './components/Sequencer';
function App() {
  return (
    <div className="App">
      {/* <Drumpad/> */}
      {/* <Sequencer/> */}
      <div className="keyBoard">
        <Octave pitch={3}/>
        <Octave pitch={4}/>
        <Octave pitch={5}/>
        <div className="lastKeys">
          <Keys keyType={"whiteKey"} note={'C'} pitch={6}/>
          <Keys keyType={"blackKey"} note={'C#'} pitch={6}/>
          <Keys keyType={"whiteKey"} note={'D'} pitch={6}/>
          <Keys keyType={"blackKey"} note={'D#'} pitch={6}/>
          <Keys keyType={"whiteKey"} note={'E'} pitch={6}/>
        </div>
      
      </div>
    </div>
  );
}

export default App;
