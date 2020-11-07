import logo from './img/logo.png';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MarkdownContentPage from './components/MarkdownContentPage';
import { Container } from 'reactstrap'

import deathRollMarkdown from './content/DeathRollSimulator/DeathRollSimulator.md'

function App() {
  return (
    <Container className="App">
      <Navigation></Navigation>
      <BrowserRouter>
        <Switch>
          <Route path="/DeathRollSimulator">
            <MarkdownContentPage
              markdownFile={deathRollMarkdown}>
              </MarkdownContentPage>
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
    </Container>
  );
}

export default App;
