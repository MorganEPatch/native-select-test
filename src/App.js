import logo from './logo.svg';
import './App.css';
import SampleForm from "./SampleForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <SampleForm />
    </div>
  );
}

export default App;
