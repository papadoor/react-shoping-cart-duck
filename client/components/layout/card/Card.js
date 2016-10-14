import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

let CardPage = function(props) {
  var height = { paddingBottom: 30 }
  return (
    <Col xs={12} md={4} style={ height } >
      <Card>
        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src="http://www.material-ui.com/images/nature-600-337.jpg" />
        </CardMedia>
        <CardTitle title={props.name} subtitle={props.category} />
        <CardText>
        {props.desc}
        </CardText>
        <CardActions>
          <FlatButton label={props.price} />
          <FlatButton label="Checkout" />
        </CardActions>
      </Card>
    </Col>
  )
}

export default CardPage;