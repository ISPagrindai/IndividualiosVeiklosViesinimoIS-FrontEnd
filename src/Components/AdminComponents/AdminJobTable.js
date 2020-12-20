import { Table, Modal, Button, Container, Col, Row } from "react-bootstrap";
import {useState, useEffect} from 'react'
import AdminJob from "../AdminComponents/AdminJob";
import CityFilter from "../Employer/CityFilter";
import {getJobs} from '../../Services/JobService'

export default function JobTable(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState();

  useEffect(() =>{
    getJobs().then(response => setTemp(response));
  },[])

  const sendCityToParent = (index) => {
    setCity(index);
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
                <th>Užmokestis</th>
                <th>Miestas</th>
                <th>Adresas</th>
              </tr>
            </thead>
            <tbody>
              { city ?
                temp.filter(j => j.miestas === city).map((job) => {
                  return <AdminJob employer={props.flag} show={handleShow} close={handleClose} data={job} key={job.id} />;
                })
                :
                temp.map((job) => {
                  return <AdminJob employer={props.flag} show={handleShow} close={handleClose} data={job} key={job.id}/>;
                })
              }
            </tbody>
          </Table>
        </Col>
        <Col sm={2}>
          <CityFilter sendCityToParent={sendCityToParent} data={temp}></CityFilter>
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
