import { Table, Modal, Button, Container, Col, Row } from "react-bootstrap";
import {useState, useEffect} from 'react'
import AdminIndividualWrok from './AdminIndividualWork'
import {getWorkers, deleteWork} from '../../Services/WorkerService'

export default function AdminIndividualWrokTable(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [temp, setTemp] = useState();
  const [id, setId] = useState();

  useEffect(() =>{
    getWorkers().then(response => setTemp(response));
  })

   const deleteHandler = () => {
    deleteWork(id).then(() => {
      setTemp(temp.filter(individualWork => individualWork.id !== id))
      setShow(false)
    })
  }

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
                {/* <th>Veiklos tipas</th>                      */}
                         
              </tr>
            </thead>
            <tbody>
              {temp.map(individualWork => {
                return <AdminIndividualWrok show={handleShow} setId={setId} close={handleClose} flag={props.flag} data={individualWork} key={individualWork.id} />
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
          <Button variant="danger" onClick={deleteHandler}>Trinti</Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </>

  );
}
