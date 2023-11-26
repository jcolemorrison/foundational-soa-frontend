import logo from './hashicorp-logo.svg';
import './App.css';
import Game from './Game'
import Logos from './Logos';

function App() {
  return (
    <div className="App">
      <div>
        <div className='App-header'>
          <a className="App-logo" href='https://www.hashicorp.com/' target="_blank">
            <img src={logo} alt="HashiCorp Logo" />
          </a>
          <Logos />
        </div>
        <Game />
      </div>
    </div>
  );
}

export default App;
