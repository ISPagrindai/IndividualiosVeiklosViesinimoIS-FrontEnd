import { Col, Table, Modal, Button } from "react-bootstrap";
import {useState} from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_eNIaeY7tuSTS9yz3Rtsvq");

export default function IndividualWork(props){

    return (
    <> 
          <Col>
            <div className="card my-3">
              <h5 className="card-header">{props.data.category}</h5>
              <div className="row">
                <div className="col-6 container-profile">
                  <img className="card-img" src={`${process.env.PUBLIC_URL}${props.data.image}`} />
                </div>
                
                <div className="col-6">
                  <div className="card-title">
                    <a href="userProfile" style={{ color: "#000" }}></a>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                      <Button href="review" variant="info">
                        Iškelti profilį !
                      </Button>{" "}
                      <Button className="text my-1" href={`individualWork/${props.data.id}`} variant="success">
                        Peržiūrėti profilį
                        </Button>{" "}
                      </li>
                      <li className="list-group-item"
                          style={{ color: "#000" }}
                          >
                        {props.data.fullName}
                      </li>
                      <li className="list-group-item">
                        {props.data.phone}
                      </li>
                      <li className="list-group-item">
                        {props.data.email}
                      </li>
                      <br/>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-text" style={{ height: 150 }}>
                    {props.data.description}
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <Button href="review" variant="success">
                  Palikti atsiliepimą
                </Button>{" "}
                <Button
                  href="individualWorkEdit"
                  className="text-white"
                  variant="warning"
                >
                Redaguoti
                </Button>{" "}
                <Button onClick={props.show} variant="danger">Ištrinti</Button>{" "}
                
                <Button href="employeeOrder" className="my-1" variant="dark">
                  Užsisakyti darbuotoją !
                </Button>{" "}

                <Button className="my-1" variant="dark" href={`automaticOrder/${props.data.id}`}>
                  Generuoti automatinį užsakymo laišką
                </Button>{" "}
              </div>
            </div>
            </Col>
    </>
    );
}