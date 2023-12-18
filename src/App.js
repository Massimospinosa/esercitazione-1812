import './App.css';
import ClassComponent from './Components/ClassComponent';
import ClassComponent2 from './Components/ClassComponent2';
import Bottone from './Components/Button';

function App() {
  return (
    <div className="App">
      <Bottone text="Pulsante 1" />
      <ClassComponent />
      <ClassComponent2 />
      <Bottone text="Pulsante 2"/>

    </div>
  );
}

export default App;
