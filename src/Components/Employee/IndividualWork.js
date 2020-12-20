import { Col, Modal, Button } from "react-bootstrap";
import {useState} from 'react';
import{ init } from 'emailjs-com';
init("user_eNIaeY7tuSTS9yz3Rtsvq");

export default function IndividualWork(props){
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

    return (
    <> 
          <Col>
            <div className="card my-3">
              <h5 className="card-header">Veikos ID: {props.data.veiklosTipas}</h5>
              <div className="row">      
                <div className="col-12">
                  <div className="card-title">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item"
                          style={{ color: "#000" }}
                          >
                        {props.data.fullName}
                        tipo vardas pavarde
                      </li>
                      <li className="list-group-item">
                        {props.data.phone}
                        tipo telefonas
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
              <Button onClick={props.show} variant="danger" onClick={handleShow}>Ištrinti</Button>{" "}
                  
                <Button href={`individualWork/fakeID`} variant="success">
                  Peržiūrėti profilį
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