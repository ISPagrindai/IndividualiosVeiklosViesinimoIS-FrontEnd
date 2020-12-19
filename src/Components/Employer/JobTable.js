import { Table, Modal, Button, Container, Col, Row } from "react-bootstrap";
import {useState} from 'react'
import Job from "./Job";
import CityFilter from "./CityFilter";

export default function JobTable(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [city, setCity] = useState(null);

  const temp = [
    {
      id: 1,
      name: "Darbas1",
      description: "Labai lengvai suderinamas su stujimois darbas",
      wage: 7.51,
      city: "Kaunas",
      address: "Vilniaus g. 1",
    },
    {
      id: 2,
      name: "Darbas2",
      description: "Labai lengvai suderinamas su stujimois darbas",
      wage: 6.31,
      city: "Vilnius",
      address: "Geležinio vilko g. 1",
    },
    {
      id: 3,
      name: "Darbas3",
      description: "Labai lengvai suderinamas su stujimois darbas",
      wage: 8.57,
      city: "Kaunas",
      address: "Kauno g. 1",
    },
  ];

  const sendCityToParent = (index) => {
    console.log(index);
    setCity(index);
  }

  return (
    <>
    <Container>
      <Row>
        <Col>
          <Table striped bordered variant="light">
            <thead>
              <tr>
                <th>Pavadinimas</th>
                <th>Aprašymas</th>
                <th>Užmokestis</th>
                <th>Miestas</th>
                <th>Adresas</th>
              </tr>
            </thead>
            <tbody>
              { city ?
                temp.filter(j => j.city == city).map((job) => {
                  return <Job employer={props.flag} show={handleShow} close={handleClose} data={job} />;
                })
                :
                temp.map((job) => {
                  return <Job employer={props.flag} show={handleShow} close={handleClose} data={job} />;
                })
              }
            </tbody>
          </Table>
        </Col>
        <Col sm={2}>
          <CityFilter sendCityToParent={sendCityToParent} data={temp}></CityFilter>
        </Col>
      </Row>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ar tikrai norite testi?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Prašome patvirtinti veiksmą</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShow(false)}>Trinti</Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </>
  );
}
