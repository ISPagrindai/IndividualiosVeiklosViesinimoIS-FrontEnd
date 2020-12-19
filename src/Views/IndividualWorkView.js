import temp from "../tempWorkersArray";
import { useParams } from "react-router";
import { useState } from "react";
import { Button, Col, Container, ListGroup, ListGroupItem, Modal, Row } from "react-bootstrap";

export default function IndividualWorkView(props) {
  let {id} = useParams();
  const worker = temp.find(w => w.id == id);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Container>
      <Row>
        <Col>
          <Col>
          <div className="card my-3">
            <h5 className="card-header">{worker.category}</h5>
            <div className="row">
              
              
              <div className="col">
                <div className="card-title">
                  <a href="userProfile" style={{ color: "#000" }}></a>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"
                        style={{ color: "#000" }}
                        >
                      {worker.fullName}
                    </li>
                    <li className="list-group-item">
                      {worker.phone}
                    </li>
                    <li className="list-group-item">
                      {worker.email}
                    </li>
                    <li className="list-group-item">
                    <div className="card-text" style={{ height: 150 }}>
                  {worker.description}
                </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <Button href="review" variant="success">
                Palikti atsiliepimą
              </Button>{" "}
              <Button
                href="individualWorkEdit"
                className="text-white"
                variant="warning"
              >
              Redaguoti
              </Button>{" "}
              <Button onClick={props.show} variant="danger" onClick={handleShow}>Ištrinti</Button>{" "}
            </div>
          </div>
          </Col>
        </Col>
        <Col>
          <ListGroup className="mt-3">
            <ListGroupItem className="bg-info text-white">
              Atsiliepimai
            </ListGroupItem>
            <ListGroupItem>
              atsiliepimas 1
            </ListGroupItem>
            <ListGroupItem>
              atsiliepimas 2
            </ListGroupItem>
            <ListGroupItem>
              atsiliepimas 3
            </ListGroupItem>
            <ListGroupItem>
              atsiliepimas 4
            </ListGroupItem>
            <ListGroupItem>
              atsiliepimas 5
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
       
      </Container>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ar tikrai norite testi?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Prašome patvirtinti veiksmą</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShow(false)}>Trinti</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
