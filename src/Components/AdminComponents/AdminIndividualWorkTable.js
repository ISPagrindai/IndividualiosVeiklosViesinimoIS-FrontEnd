import { Table, Modal, Button, Container, Col, Row } from "react-bootstrap";
import {useState, useEffect} from 'react'
import AdminIndividualWrok from './AdminIndividualWork'
import {getWorkers} from '../../Services/WorkerService'

export default function AdminIndividualWrokTable(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [temp, setTemp] = useState();

  useEffect(() =>{
    getWorkers().then(response => setTemp(response));
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
                <th>Aprašymas</th>
                <th>Kaina</th>
                <th>Grafikas</th>
                <th>Miestas</th>
                <th>Veiklos tipas</th>                     
                         
              </tr>
            </thead>
            <tbody>
              {temp.map(individualWork => {
                return <AdminIndividualWrok show={handleShow} close={handleClose} flag={props.flag} data={user} key={individualWork.id} />
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
