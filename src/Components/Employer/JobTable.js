import { Table, Modal, Button, Container, Col, Row } from "react-bootstrap";
import {useState, useEffect} from 'react'
import Job from "./Job";
import CityFilter from "./CityFilter";
import {getCurrentUserJobs, getJobs, deleteJob} from '../../Services/JobService'

export default function JobTable(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState();
  const [id, setId] = useState();

  useEffect(() =>{
    if(props.flag){
      getCurrentUserJobs().then(response => setTemp(response));
    }
    else{
      getJobs().then(response => setTemp(response));
    }
  },[props.flag])

  const sendCityToParent = (index) => {
    setCity(index);
  }
  const deleteHandler = () =>{
    deleteJob(id).then(() =>{
      setTemp(temp.filter(job => job.id !== id))
      setShow(false)
      setId();
    })
  }

  return (
    <>
    <Container>
    {temp && temp.length !== 0 ? (<Row>
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
                temp.filter(j => j.miestas === city).map((job) => {
                  return <Job employer={props.flag} show={handleShow} setId={setId} close={handleClose} data={job} key={job.id} />;
                })
                :
                temp.map((job) => {
                  return <Job employer={props.flag} show={handleShow} setId={setId} close={handleClose} data={job} key={job.id}/>;
                })
              }
            </tbody>
          </Table>
        </Col>
        <Col sm={2}>
          <CityFilter sendCityToParent={sendCityToParent} data={temp}></CityFilter>
        </Col>
      </Row>) : (<h2>Trumpalaikių darbų nėra</h2>)}

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
