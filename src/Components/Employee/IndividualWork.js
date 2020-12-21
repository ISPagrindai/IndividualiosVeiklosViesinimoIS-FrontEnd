import { Col, Modal, Button } from "react-bootstrap";
import {useState, useEffect} from 'react';
import{ init } from 'emailjs-com';
import {getProfile} from '../../Services/ProfileService';
import {getWorkTypes} from '../../Services/WorkerService';

init("user_eNIaeY7tuSTS9yz3Rtsvq");



export default function IndividualWork(props){
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const deleteHandler = () => {
    handleShow();
    props.setId(props.data.id);
  }

  useEffect(() =>{
    getProfile(props.data.id).then(response => setProfile(response));
  },[])

  
  useEffect(() =>{
    getWorkTypes().then(response => setWorkTypes(response));
  },[])

  const [profile, setProfile] = useState();
  const [workTypes, setWorkTypes] = useState();

    return (
    <> {profile && workTypes ?
          <Col>
            <div className="card my-4">
              <h5 className="card-header">{workTypes.find(t => t.id === props.data.veiklosTipas).pavadinimas}</h5>
              <div className="row">      
                <div className="col-12">
                  <div className="card-title">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item"
                          style={{ color: "#000" }}
                          >
                        {profile.vardas} {profile.pavarde}
                      </li>
                      <li className="list-group-item">
                        {props.data.email}
                        tipo email
                      </li>
                      <br/>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-text" style={{ height: 150 }}>
                    {props.data.aprasymas}
                  </div>
                </div>
              </div>
              <div className="card-footer">

                <Button href="vipForm" className="my-1" variant="info">
                  Iškelti profilį
                  </Button>{" "}

                  <Button
                href={`/worker/edit/${props.data.id}`}
                className="text-white"
                variant="warning"
              >
              Redaguoti
              </Button>{" "}
              {props.currentId == props.data.id ? <Button onClick={props.show} variant="danger" onClick={deleteHandler}>Ištrinti</Button> : null}
                  
                <Button href={`individualWork/${profile.id}`} variant="success">
                  Peržiūrėti profilį
                </Button>{" "}

                <Button href={`/employeeReview/${profile.id}/work/${props.data.vartotojoId}`} variant="success">
                Palikti atsiliepimą apie veiklą
              </Button>{" "}
                
                <Button href="employeeOrder" className="my-1" variant="dark">
                  Užsisakyti darbuotoją !
                </Button>{" "}

                <Button className="my-1" variant="dark" href={`automaticOrder/${props.data.id}`}>
                  Generuoti automatinį užsakymo laišką
                </Button>{" "}
              </div>
            </div>
          </Col>
          : null }

          <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ar tikrai norite testi?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Prašome patvirtinti veiksmą</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => props.delete()}>Trinti</Button>
        </Modal.Footer>
      </Modal>
            
    </>
    );
}