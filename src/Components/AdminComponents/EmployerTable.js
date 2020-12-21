import { Table, Modal, Button, Container, Col, Row } from "react-bootstrap";
import {useState, useEffect} from 'react'
import Employer from "./Employer";
import {getEmployers} from '../../Services/EmployerService'

export default function EmployerTable(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [temp, setTemp] = useState();

   useEffect(() =>{
    getEmployers().then(response => setTemp(response));
  })

  return (
    <>
    <Container>
    {temp ?  (<Row>
        <Col>
          <Table striped bordered variant="light">
            <thead>
              <tr>
                <th>Pavadinimas</th>
                <th>Įmonės kodas</th>
                <th>Vadovas</th>                   
                <th>Tinklalapis</th>
                <th>Telefono numeris</th>
                <th>El paštas</th>
                <th>Miestas</th>
                <th>Adresas</th>                               
              </tr>
            </thead>
            <tbody>
              {temp.map(employer => {
                return <Employer show={handleShow} close={handleClose} flag={props.flag} data={employer} key={employer.id} />
            })}
            </tbody>
          </Table>
        </Col>        
      </Row>) : null}

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
