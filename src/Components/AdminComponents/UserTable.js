import { Table, Modal, Button } from "react-bootstrap";
import {useState} from 'react'
import User from './User'

export default function UserTable(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const temp = [
    {
      id: 1,
      name: "Domantas",
      surname: "Kernagis",
      birthday: "1999-09-17",
      sex: "Vyras",
      phone: "+37065375753",
      email: "pastas@gmail.com"
    },
    {
      id: 2,
      name: "Aiste",
      surname: "Juozapavičiūtė",
      birthday: "1999-05-11",
      sex: "Moteris",
      phone: "+37065375753",
      email: "pastas@gmail.com"
    },
    {
      id: 3,
      name: "Aivaras",
      surname: "Kalnaitis",
      birthday: "2000-01-01",
      sex: "Vyras",
      phone: "+37065375753",
      email: "pastas@gmail.com"
    },
  ];

  return (
    <>
      <Table striped bordered variant="light">
        <thead>
          <tr>
            <th>Vardas</th>
            <th>Pavardė</th>
            <th>Gimimo data</th>
            <th>Lytis</th>
            <th>Tel. Nr</th>
            <th>El. Paštas</th>
          </tr>
        </thead>
        <tbody>
            {temp.map(user => {
                return <User show={handleShow} close={handleClose} flag={props.flag} data={user} />
            })}
        </tbody>
      </Table>      
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ar tikrai norite testi?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Prašome patvirtinti veiksmą</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShow(false)}>Užšaldyti</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
