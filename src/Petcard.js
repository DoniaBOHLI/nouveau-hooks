import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 

function Petcard() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />

        <Card.Body>
          <Card.Title>FASHION STREAMING </Card.Title>
          <Card.Text>{props.name}</Card.Text>
          <Card.Text>{props.type}</Card.Text>
          <Card.Text>{props.photo}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
  