import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Col, Button, Container, Table, Row } from "react-bootstrap";
import EmployeeReview from '../Components/Employee/EmployeeReview';
import {getProfile} from '../Services/ProfileService';
import { getReviews } from '../Services/ReviewService';

export default function IndividualWorkView(props) {
  let {id} = useParams();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [profile, setProfile] = useState();

  useEffect(() =>{
    getProfile(id).then(response => setProfile(response));
  },[])

  const [reviews, setReviews] = useState();

  useEffect(() =>{
    getReviews().then(response => setReviews(response));
  },[])

  return (
    <> {console.log(reviews)}
    { profile && reviews ? 
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
                          <b>El-paštas: </b>
                          {profile.elPastas}
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
                <div className="card-footer">
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
                </tr>
              </thead>
              <tbody>
                { reviews.filter(r => r.vartotojasId == id).map((review, i) => {
                      return <EmployeeReview data={review} key={i}></EmployeeReview>
                  })
                }
              </tbody>
            </Table>
          </Col>
        </Row>
        </Container>
    : null }

     
    </>
  );
}
