import './GameCard.css'
import {
    Card, CardText, CardBody, Button,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const GameCard = (props) => {

    return (
        <Card>
            <CardBody>
                <CardTitle tag="h4">{props.title}</CardTitle>
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
                {' '}
                <a href={props.download} target="_blank" rel="noreferrer">
                    <Button color="primary">Download</Button>
                </a>
            </CardBody>
        </Card>
    );
}

export default GameCard;