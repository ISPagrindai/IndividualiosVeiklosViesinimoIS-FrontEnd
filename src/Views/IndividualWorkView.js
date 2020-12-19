import temp from "../tempWorkersArray";
import { useParams } from "react-router";
import { useState } from "react";
import { Button, Col, Container, Table, ListGroupItem, Modal, Row } from "react-bootstrap";
import EmployeeReview from '../Components/Employee/EmployeeReview';

export default function IndividualWorkView(props) {
  let {id} = useParams();
  const [worker, setWorker] = useState(temp.find(w => w.id == id));
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const reviews = [
    {
      comment: "Labai gerai dirba",
      rating: 7.8,
      user_id: 2,
      user_type: "Registruota įmonė"
    },
    {
      comment: "Supiso mano audi",
      rating: 3.2,
      user_id: 7,
      user_type: "Administratorius"
    }
  ];

  return (
    <>
    <Container>
      <Row>
        <Col>
          <Col>
          <div className="card my-3">
            <h5 className="card-header">{worker.category}</h5>
            <div className="row">   
              <div className="col-12">
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
                    <br/>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <Button href="/review" variant="success">
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
        <Table striped bordered variant="grey" className="my-3">
            <thead className="bg-info text-white">
              <tr>
                <th>Komentaras</th>
                <th>Įvertinimas</th>
                <th>Siuntėjo tipas</th>
                <th>Siuntėjo ID</th>
              </tr>
            </thead>
            <tbody>
              { reviews.map((review) => {
                    return <EmployeeReview data={review}></EmployeeReview>
                })
              }
            </tbody>
          </Table>
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
