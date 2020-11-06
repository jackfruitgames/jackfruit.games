import logo from './logo.svg';
import './App.css';
import {
  Button,
} from 'reactstrap';
import Navigation from './components/Navigation';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DeathRollSimulator from './components/DeathRollSimulator';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button color="primary">test</Button>
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/DeathRollSimulator">
            <DeathRollSimulator></DeathRollSimulator>
          </Route>
          <Route path="/">
            {/* The Router stops at the first match.
             path='/' matches always! Therefore it needs to be at the end. */}
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
