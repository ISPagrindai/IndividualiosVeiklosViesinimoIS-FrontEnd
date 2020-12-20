import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Button, Col, Container, Table, Modal, Row } from "react-bootstrap";
import EmployeeReview from '../Components/Employee/EmployeeReview';
import {getWorkers} from '../Services/WorkerService';

export default function IndividualWorkView(props) {
  let {id} = useParams();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [temp, setTemp] = useState();

  useEffect(() =>{
    getWorkers().then(response => setTemp(response));
  },[])

  const [worker, setWorker] = useState(null);


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
    { temp ?
    <Container>
      <Row>
        <Col>
          <Col>
          <div className="card my-3">
            <h5 className="card-header">{temp.find(w => w.id == id).veiklosTipas}</h5>
            <div className="row">   
              <div className="col-12">
                <div className="card-title">
                  <a href="userProfile" style={{ color: "#000" }}></a>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"
                        style={{ color: "#000" }}
                        >
                      {temp.find(w => w.id == id).fullName}
                    </li>
                    <li className="list-group-item">
                      {temp.find(w => w.id == id).phone}
                    </li>
                    <li className="list-group-item">
                      {temp.find(w => w.id == id).email}
                    </li>
                    <li className="list-group-item">
                    <div className="card-text" style={{ height: 150 }}>
                  {temp.find(w => w.id == id).aprasymas}
                </div>
                    </li>
                    <br/>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <Button href="/employeeReview" variant="success">
                Palikti atsiliepimą
              </Button>{" "}
              <Button
                href={`/worker/edit/${temp.find(w => w.id == id).id}`}
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
              { reviews.map((review, i) => {
                    return <EmployeeReview data={review} key={i}></EmployeeReview>
                })
              }
            </tbody>
          </Table>
        </Col>
      </Row>
      </Container> : null }

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
