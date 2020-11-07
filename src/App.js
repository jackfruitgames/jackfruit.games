import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import MarkdownContentPage from './components/MarkdownContentPage';
import Footer from './components/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap'

import deathRollMarkdown from './content/DeathRollSimulator/DeathRollSimulator.md'

function App() {
  return (
    <div>
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
              <Home></Home>
            </Route>
          </Switch>
        </BrowserRouter>
      </Container>
      <Container className="App-footer">
        <Footer></Footer>
      </Container>
    </div>
  );
}

export default App;
