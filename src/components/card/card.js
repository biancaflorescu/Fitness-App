import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./card.css";

const CardExercice = (props) => {
  console.log(props.records);

  return (
    <div className="card-container">
      {props.records.map((el) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{el.name}</Card.Title>
            </Card.Body>
            <Card.Img variant="top" src={el.image} />
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <strong>Body part:</strong> {el.bodyPart}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Target Muscles:</strong> {el.targetMuscle}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Equipment:</strong> {el.equipment}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        );
      })}
    </div>
  );
};

export default CardExercice;
