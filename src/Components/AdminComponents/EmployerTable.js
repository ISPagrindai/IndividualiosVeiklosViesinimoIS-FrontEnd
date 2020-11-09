import { Table, Modal, Button } from "react-bootstrap";
import {useState} from 'react'
import Employer from "./Employer";

export default function EmployerTable(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const temp = [
    {
      id: 1,
      name: "Imone1",
      description: "Labai lengvai suderinamas su stujimois darbas",      
      city: "Kaunas",
      address: "Vilniaus g. 1",
    },
    {
      id: 2,
      name: "Imone2",
      description: "Labai lengvai suderinamas su stujimois darbas",      
      city: "Kaunas",
      address: "Geležinio vilko g. 1",
    },
    {
      id: 3,
      name: "Imone3",
      description: "Labai lengvai suderinamas su stujimois darbas",     
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
            <th>Miestas</th>
            <th>Adresas</th>
          </tr>
        </thead>
        <tbody>
          {temp.map((employer) => {
            return <Employer employer={props.flag} show={handleShow} close={handleClose} data={employer} />;
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
