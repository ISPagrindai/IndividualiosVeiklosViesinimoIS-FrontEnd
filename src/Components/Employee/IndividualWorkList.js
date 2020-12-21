import { Container, Row, Modal, Button, Alert } from "react-bootstrap";
import {useState, useEffect} from 'react'
import IndividualWork from "./IndividualWork";
import CategoryFilter from "./CategoryFilter";
import IndividualWorkListSort from "./IndividualWorkListSort";
import {getWorkers} from '../../Services//WorkerService';
import { getWorkTypes, deleteWork, getCurrentUser } from '../../Services/WorkerService';


export default function IndividualWorkList(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [temp, setTemp] = useState();
  const [workTypes, setWorkTypes] = useState();
  const [id, setId] = useState();
  const [currentId, setCurrentId] = useState();
  const [category, setCategory] = useState(null);
  const [number, setNumber] = useState(null);

  useEffect(() =>{
    getWorkTypes().then(response => setWorkTypes(response));
  },[])

  useEffect(() =>{
    getWorkers().then(response => setTemp(response));
  }, [])
  
  const deleteHandler = () =>{
    deleteWork(id).then(() => {
      setTemp(temp.filter(w => w.id !== id));
      handleClose();
    })
  }
  useEffect(() =>{
    getCurrentUser().then(response => setCurrentId(response))
  }, [])

  const sendCategoryToParent = (index) => {
    setCategory(index);
  }

  const sendNumberToParent = (index) => {
    setNumber(index);
  }

  return (
    <>
    {temp && workTypes ?
      <Row> 
      <div className="col-sm-3 col-md-3 col-lg-2 my-5 mx-5">
          <CategoryFilter sendCategoryToParent={sendCategoryToParent} data={temp}></CategoryFilter>
          < br/>
          { category ?
            null
            : <IndividualWorkListSort sendNumberToParent={sendNumberToParent} data={temp}></IndividualWorkListSort> }
      </div>

      <div className="col">
      {currentId ? (<Container fluid>
          <Row xs={1} sm={1} md={1} lg={2} xl={3}>
          {number === "A-Z" ?
            category ?
              temp.filter(work => work.veiklosTipas === workTypes.find(type => type.pavadinimas = category).id).length > 0 ?
                temp.sort(function(a, b){
                  if(workTypes.find(type => type.id === a.veiklosTipas).pavadinimas < workTypes.find(type => type.id === b.veiklosTipas).pavadinimas) { return -1; }
                  if(workTypes.find(type => type.id === a.veiklosTipas).pavadinimas > workTypes.find(type => type.id === b.veiklosTipas).pavadinimas) { return 1; }
                  return 0;
                }).filter(work => work.veiklosTipas === workTypes.find(type => type.pavadinimas === category).id).map((work) => {
                  return <IndividualWork currentId={currentId} setId={setId} delete={deleteHandler} employee={props.flag} show={handleShow} close={handleClose} temp={temp} data={work} key={work.id}
                    />;
              }) 
              : 
              <Alert variant="warning" className="my-5">
                Individualių veiklų pagal šia kategoriją nėra...
              </Alert>
            :
              temp.sort(function(a, b){
                if(workTypes.find(type => type.id === a.veiklosTipas).pavadinimas < workTypes.find(type => type.id === b.veiklosTipas).pavadinimas) { return -1; }
                if(workTypes.find(type => type.id === a.veiklosTipas).pavadinimas > workTypes.find(type => type.id === b.veiklosTipas).pavadinimas) { return 1; }
                return 0;
              }).map((work) => {
                return <IndividualWork  currentId={currentId} setId={setId} delete={deleteHandler}
                employee={props.flag} show={handleShow} close={handleClose} data={work} key={work.id} />;
            })
            : 
            (number === "Z-A" ?
              category ? 
                temp.filter(work => work.veiklosTipas === workTypes.find(type => type.pavadinimas === category).id).length > 0 ?
                  temp.sort(function(a, b){
                    if(workTypes.find(type => type.id === a.veiklosTipas).pavadinimas < workTypes.find(type => type.id === b.veiklosTipas).pavadinimas) { return 1; }
                    if(workTypes.find(type => type.id === a.veiklosTipas).pavadinimas > workTypes.find(type => type.id === b.veiklosTipas).pavadinimas) { return -1; }
                    return 0;
                  }).filter(work => work.veiklosTipas === workTypes.find(type => type.pavadinimas === category).id).map((work) => {
                    return <IndividualWork currentId={currentId} setId={setId} delete={deleteHandler}
                    employee={props.flag} show={handleShow} close={handleClose} data={work} key={work.id}/>;
                  })
                  :
                  <Alert variant="warning" className="my-5">
                    Individualių veiklų pagal šia kategoriją nėra...
                  </Alert>
                :
                temp.sort(function(a, b){
                  if(workTypes.find(type => type.id === a.veiklosTipas).pavadinimas < workTypes.find(type => type.id === b.veiklosTipas).pavadinimas) { return 1; }
                  if(workTypes.find(type => type.id === a.veiklosTipas).pavadinimas > workTypes.find(type => type.id === b.veiklosTipas).pavadinimas) { return -1; }
                  return 0;
                }).map((work) => {
                  return <IndividualWork currentId={currentId} setId={setId} delete={deleteHandler}
                  employee={props.flag} show={handleShow} close={handleClose} data={work} key={work.id}/>;
                })
            :
              category ?
                temp.filter(work => work.veiklosTipas === workTypes.find(type => type.pavadinimas === category).id).length > 0 ?
                temp.filter(work => work.veiklosTipas === workTypes.find(type => type.pavadinimas === category).id).map((work) => {
                  return <IndividualWork  currentId={currentId} setId={setId} delete={deleteHandler}
                  employee={props.flag} show={handleShow} close={handleClose} data={work} key={work.id}/>;
              })
              :
                <Alert variant="warning" className="my-5">
                  Individualių veiklų pagal šia kategoriją nėra...
                </Alert>
            :
              temp.map((work) => {
                return <IndividualWork currentId={currentId} setId={setId} delete={deleteHandler}
                employee={props.flag} show={handleShow} close={handleClose} data={work} key={work.id} />;
            })
            ) 
          }
          
          </Row>
          </Container>) : null}
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
