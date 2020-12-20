import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Button, Col, Container, Table, Modal, Row } from "react-bootstrap";
import EmployeeReview from '../Components/Employee/EmployeeReview';
import {getWorkers} from '../Services/WorkerService';

export default function IndividualWorkView(props) {
  let {id} = useParams();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [temp, setTemp] = useState();

  useEffect(() =>{
    getWorkers().then(response => setTemp(response));
  },[])

  const reviews = [
    {
      comment: "Labai gerai dirba",
      rating: 7.8,
      user_id: 2,
      user_type: "Registruota įmonė"
    },
    {
      comment: "Supiso mano audi",
      rating: 3.2,
      user_id: 7,
      user_type: "Administratorius"
    }
  ];

  return (
    <>
    { temp ?
    <Container>
      <Row>
        <Col>
          <Col>
          <div className="card my-3">
            <h5 className="card-header">Vartotojo ID: beleka</h5>
            <div className="row">   
              <div className="col-12">
                <div className="card-title">
                  <a href="userProfile" style={{ color: "#000" }}></a>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"
                        style={{ color: "#000" }}
                        >
                      {/* {temp.find(w => w.id == id).fullName} */}
                      tipo vardas pavarde
                    </li>
                    <li className="list-group-item">
                      {/* {temp.find(w => w.id == id).phone} */}
                      tipo telefonas
                    </li>
                    <li className="list-group-item">
                      {/* {temp.find(w => w.id == id).email} */}
                      tipo el-pastas
                    </li>
                    <li className="list-group-item">
                      {/* {temp.find(w => w.id == id).email} */}
                      tipo lytis
                    </li>
                    <li className="list-group-item">
                      {/* {temp.find(w => w.id == id).email} */}
                      tipo banko saskaita
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <Button href="/employeeReview" variant="success">
                Palikti atsiliepimą
              </Button>{" "}
      
            </div>
          </div>
          </Col>
        </Col>
        <Col>
        <Table striped bordered variant="grey" className="my-3">
            <thead className="bg-info text-white">
              <tr>
                <th>Komentaras</th>
                <th>Įvertinimas</th>
                <th>Siuntėjo tipas</th>
                <th>Siuntėjo ID</th>
              </tr>
            </thead>
            <tbody>
              { reviews.map((review, i) => {
                    return <EmployeeReview data={review} key={i}></EmployeeReview>
                })
              }
            </tbody>
          </Table>
        </Col>
      </Row>
      </Container> : null }

     
    </>
  );
}
