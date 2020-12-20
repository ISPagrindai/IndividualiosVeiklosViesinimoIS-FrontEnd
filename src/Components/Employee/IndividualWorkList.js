import { Container, Row, Modal, Button } from "react-bootstrap";
import {useState, useEffect} from 'react'
import IndividualWork from "./IndividualWork";
import CategoryFilter from "./CategoryFilter";
import IndividualWorkListSort from "./IndividualWorkListSort";
import {getWorkers} from '../../Services//WorkerService';

export default function IndividualWorkList(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [temp, setTemp] = useState();

  useEffect(() =>{
    getWorkers().then(response => setTemp(response));
  },[])

  const [category, setCategory] = useState(null);
  const [number, setNumber] = useState(null);

  const sendCategoryToParent = (index) => {
    setCategory(index);
  }

  const sendNumberToParent = (index) => {
    setNumber(index);
  }

  {}

  return (
    <>
    {temp ? <Row>
    <div className="col-sm-3 col-md-3 col-lg-2 mx-3">
        <CategoryFilter sendCategoryToParent={sendCategoryToParent} data={temp}></CategoryFilter>
        < br/>
        <IndividualWorkListSort sendNumberToParent={sendNumberToParent} data={temp}></IndividualWorkListSort>
    </div>

    <div className="col">
    <Container fluid>
        <Row xs={1} sm={1} md={1} lg={2} xl={3}>
        {number === "A-Z" ?
          category ?
            temp.sort(function(a, b){
              if(a.veiklosTipas < b.veiklosTipas) { return -1; }
              if(a.veiklosTipas > b.veiklosTipas) { return 1; }
              return 0;
            }).filter(w => w.veiklosTipas === category).map((work) => {
              return <IndividualWork  employee={props.flag} show={handleShow} close={handleClose} data={work} key={work.id}/>;
          })
          :
            temp.sort(function(a, b){
              if(a.veiklosTipas < b.veiklosTipas) { return -1; }
              if(a.veiklosTipas > b.veiklosTipas) { return 1; }
              return 0;
            }).map((work) => {
              return <IndividualWork  employee={props.flag} show={handleShow} close={handleClose} data={work} key={work.id} />;
          })
          : 
          (number === "Z-A" ?
            category ?
            temp.sort(function(a, b){
              if(a.veiklosTipas < b.veiklosTipas) { return 1; }
              if(a.veiklosTipas > b.veiklosTipas) { return -1; }
              return 0;
            }).filter(w => w.veiklosTipas === category).map((work) => {
              return <IndividualWork  employee={props.flag} show={handleShow} close={handleClose} data={work} key={work.id}/>;
            })
            :
            temp.sort(function(a, b){
              if(a.veiklosTipas < b.veiklosTipas) { return 1; }
              if(a.veiklosTipas > b.veiklosTipas) { return -1; }
              return 0;
            }).map((work) => {
              return <IndividualWork  employee={props.flag} show={handleShow} close={handleClose} data={work} key={work.id}/>;
            })
          :
            category ?
            temp.filter(w => w.veiklosTipas === category).map((work) => {
              return <IndividualWork  employee={props.flag} show={handleShow} close={handleClose} data={work} key={work.id}/>;
          })
          :
            temp.map((work) => {
              return <IndividualWork  employee={props.flag} show={handleShow} close={handleClose} data={work} key={work.id} />;
          })
          ) 
        }
        
        </Row>
        </Container>
    </div>
    </Row> 
    : null }

    
        
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
