import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Button, Col, Container, Table, Modal, Row } from "react-bootstrap";
import EmployeeReview from '../Components/Employee/EmployeeReview';
import {getProfile} from '../Services/ProfileService';

export default function IndividualWorkView(props) {
  let {id} = useParams();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [profile, setProfile] = useState();

  useEffect(() =>{
    getProfile(id).then(response => setProfile(response));
  },[])

  const reviews = [
    {
      comment: "Labai gerai dirba",
      rating: 7.8,
      user_id: 2,
      user_type: "Registruota įmonė",
      job_type: "žydų ieškojimas"
    },
    {
      comment: "Supiso mano audi",
      rating: 3.2,
      user_id: 7,
      user_type: "Administratorius",
      job_type: "Nacių naikinimas"
    }
  ];

  return (
    <>
    { profile ?
    <Container>
      <Row>
        <Col>
          <Col>
          <div className="card my-3">
            <h5 className="card-header">{profile.vardas} {profile.pavarde}</h5>
            <div className="row">   
              <div className="col-12">
                <div className="card-title">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        {/* {temp.find(w => w.id == id).email} */}
                        <b>El-paštas: </b>
                        {profile.elpatas}
                        el pastas
                      </li>
                      <li className="list-group-item">
                        <b>Lytis: </b>
                        {profile.lytis}
                      </li>
                      <li className="list-group-item">
                        <b>Sąskaitos nr: </b>
                        {profile.sasNr}
                      </li>
                      <li className="list-group-item">
                        <b>Gimimo metai: </b>
                        {profile.gimimoMetai}
                      </li>
                      <li className="list-group-item">
                        <b>Asmens kodas: </b>
                        {profile.asmensKodas}
                      </li>
                    </ul>
                  </div>
                </div>
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
                <th>Atliktas darbas</th>
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
