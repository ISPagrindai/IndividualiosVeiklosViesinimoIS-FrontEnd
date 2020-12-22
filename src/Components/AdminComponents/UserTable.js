import { Table, Modal, Button, Container, Col, Row } from "react-bootstrap";
import {useState, useEffect} from 'react'
import User from './User'
import {getUsers, deleteUser} from '../../Services/UserService'

export default function UserTable(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [temp, setTemp] = useState();
  const [id, setId] = useState();

  useEffect(() =>{
    getUsers().then(response => {
      setTemp(response)
    console.log(response);
    });
  }, [])
  const deleteHandler = () =>{
    deleteUser(id).then(() =>{
      setTemp(temp.filter(user => user.id !== id))
      setShow(false)
      setId();
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
                <th>Vardas</th>
                <th>Pavardė</th>
                <th>Gimimo metai</th>
                <th>Lytis</th>
                <th>Aprašymas</th>     
                <th>Asmens kodas</th>    
                <th>Sąskaitos nr</th>  
              </tr>
            </thead>
            <tbody>
              {temp.map(user => {
                return <User setId={setId}  show={handleShow} close={handleClose} flag={props.flag} data={user} key={user.id} />
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
