import './Home.css'
import { Container, Row, Col } from 'reactstrap'
import GameCard from './GameCard'

import deathRollLogo from '../img/death_roll_app_icon_512.png';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                <h1>WHO WE ARE</h1>
                <p className="Home-text">
                    We're a small indie game development studio from Switzerland.
                    Our games are mostly created with open source tools like
                    the <a href="https://godotengine.org/" target="_blank" rel="noreferrer">
                        Godot Engine
                    </a> and we publish some of our code
                    on <a href="https://github.com/jackfruitgames" target="_blank" rel="noreferrer">
                        github.com/jackfruitgames
                    </a>.
                </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>GAMES</h1>
                </Col>
            </Row>
            <Row>
                <Col xs="6">
                    <GameCard
                        href="/DeathRollSimulator"
                        download="https://play.google.com/store/apps/details?id=ch.jackfruit.deathrollsimulator"
                        title="WoW Death Roll Simulator"
                        image={deathRollLogo}
                        releaseDate="05. November 2020"
                        description="An Android app that simulates the 'Death Roll' game.">
                        </GameCard>
                </Col>
                {/* <Col>
                    <GameCard
                        title="Test App"
                        image={deathRollLogo}
                        releaseDate="12. January 2020">
                        </GameCard>
                </Col> */}
            </Row>
        </Container>
    );
}

export default Home;