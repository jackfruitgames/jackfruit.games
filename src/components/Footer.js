import './Footer.css'
import logo from '../img/logo.png';
import { Container, Row, Col } from 'reactstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <img className="Footer-logo" src={logo} alt="Jackfruit Games logo" />
          </Col>
        </Row>
        <Row>
          <Col>
            ©{(new Date()).getFullYear()} JACKFRUIT GAMES. ALL RIGHTS RESERVED.
          </Col>
        </Row>
        <Row>
          <Col>
            All trademarks referenced herein are the properties of their respective owners.
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;