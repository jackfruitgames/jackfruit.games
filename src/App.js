import logo from './img/logo.png';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DeathRollSimulator from './components/DeathRollSimulator';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <BrowserRouter>
        <Switch>
          <Route path="/DeathRollSimulator">
            <DeathRollSimulator></DeathRollSimulator>
          </Route>
          <Route path="/">
            {/* The Router stops at the first match.
             path='/' matches always! Therefore it needs to be at the end. */}
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
