import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import MarkdownContentPage from './components/MarkdownContentPage';
import Footer from './components/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap'
import { Helmet } from 'react-helmet'

import logo from './img/logo.png';
import deathRollMarkdown from './content/DeathRollSimulator/DeathRollSimulator.md'

function App() {
  return (
    <div>
      <Navigation></Navigation>

      <BrowserRouter>
        <Switch>

          <Route path="/DeathRollSimulator">
            <Container className="App">
              <Helmet>
                <title>Jackfruit Games - WoW Death Roll Simulator</title>
                <meta
                  name="description"
                  content="A must have for every death roll fan! The WoW Death Roll Simulator by Jackfruit Games." />
              </Helmet>
              <MarkdownContentPage
                markdownFile={deathRollMarkdown}>
              </MarkdownContentPage>
            </Container>
          </Route>

          <Route path="/">
            {/* The Router stops at the first match.
                path='/' matches always! Therefore it needs to be at the end. */}
            <Container>
              <img src={logo} className="img-fluid" alt="Jackfruit Games logo" />
            </Container>
            <Container className="App">
              <Home></Home>
            </Container>
          </Route>

        </Switch>
      </BrowserRouter>
      <Container className="App-footer">
        <Footer></Footer>
      </Container>
    </div>
  );
}

export default App;
