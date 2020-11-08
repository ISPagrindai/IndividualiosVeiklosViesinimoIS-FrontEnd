import { Table, Modal, Button } from "react-bootstrap";
import {useState} from 'react'
import Job from "./Job";

export default function JobTable(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      city: "Kaunas",
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

  return (
    <>
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
          {temp.map((job) => {
            return <Job employer={props.flag} show={handleShow} close={handleClose} data={job} />;
          })}
        </tbody>
      </Table>
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
