import './GameCard.css'
import {
  Card, CardText, CardBody, Button,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';

const GameCard = (props) => {

  return (
    <Col md="6">
      <Card className='GameCard'>
        <CardBody>
          <CardTitle tag="h3">
            <a href="/DeathRollSimulator">{props.title}</a>
          </CardTitle>
          <CardSubtitle>Released: {props.releaseDate}</CardSubtitle>
        </CardBody>
        <a href={props.href}>
          <img width="100%" src={props.image} alt="Game Logo" />
        </a>
        <CardBody>
          <CardText>
            {props.description}
          </CardText>
          <a href={props.href}>
            <Button color="primary">Read more</Button>
          </a>
          <a href={props.download} target='_blank' rel="noreferrer">
            <img height='60px'
              alt='Get it on Google Play'
              src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
          </a>
        </CardBody>
      </Card>
    </Col>
  );
}

export default GameCard;