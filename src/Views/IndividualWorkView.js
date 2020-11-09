import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import styles from "../IndividualWork.module.css";
import classNames from "classnames";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import '../individualWorkCard.css'

export default function IndividualWorkView() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-6">
            <div className="card my-5">
              <h5 className="card-header">-- Muzikantė - Gitaristė --</h5>
              <div className="row">
                <div className="col-6 container-profile">
                  <img className="card-img"
                  src={`${process.env.PUBLIC_URL}/assets/images/photo.jpg`}
                  ></img>
                  <div className="overlay individualWorkCard">
                    <Button className="text" href="userProfile"  variant="success">
                    Peržiūrėti profilį
                    </Button>{" "}
                  </div>
                </div>
                <div className="col-6">
                  <div className="card-title">
                    <a href="userProfile" style={{ color: "#000" }}></a>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                      <Button href="review" variant="info">
                        Iškelti profilį !
                      </Button>{" "}
                      </li>
                      <li className="list-group-item"
                          style={{ color: "#000" }}
                          >
                        Ingrida Ramanauskaitė
                      </li>
                      <li className="list-group-item">
                        Telefonas: 868405446
                      </li>
                      <li className="list-group-item">
                        El. Paštas: Ingrida.Gitaristė@muzika.lt
                      </li>
                      <br/>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-text" style={{ height: 150 }}>
                    Nuo pat mažumos mane traukia muzika, 7 metu jau mokėjau groti
                    penkiais instrumentais, tačiau, pagal mane, niekas niekad
                    neaplenks gitaros. 2016 metais laimėjau Lietuvos balsą bei
                    turiu daugelį apdovanojimų iš muzikos konkursų. Tad jeigu
                    kažką domina talentinga muzikante, ar tai būtų vestuvėms,
                    gimtadieniui ar šiaip mini-koncertui, susisiekite su manim.
                  </div>
                </div>
              </div>
              <div className="card-footer col-12">
                <Button href="review" variant="success">
                  Palikti atsiliepimą
                </Button>{" "}
                <Button
                  href="individualWorkEdit"
                  className={styles.btnspace}
                  variant="warning"
                >
                Redaguoti
                </Button>{" "}
                <Button onClick={handleShow} variant="danger">Ištrinti</Button>{" "}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-6">
            <div className="card my-5">
              <h5 className="card-header">-- Sodininkas --</h5>
              <div className="row">
                <div className="col-6 container-profile">
                  <img className="card-img"
                  src={`${process.env.PUBLIC_URL}/assets/images/gardener.jpg`}
                  ></img>
                  <div className="overlay individualWorkCard">
                    <Button className="text" href="userProfile"  variant="success">
                    Peržiūrėti profilį
                    </Button>{" "}
                  </div>
                </div>
                <div className="col-6">
                  <div className="card-title">
                    <a href="userProfile" style={{ color: "#000" }}></a>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                      <Button href="review" variant="info">
                        Iškelti profilį !
                      </Button>{" "}
                      </li>
                      <li className="list-group-item"
                          style={{ color: "#000" }}
                          >
                        Tomas Žaliauskas
                      </li>
                      <li className="list-group-item">
                        Telefonas: 865498612
                      </li>
                      <li className="list-group-item">
                        El. Paštas: tomas.sodas@gmail.com
                      </li>
                      <br/>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-text" style={{ height: 150 }}>
                    Man labai patinka gamta, todėl kasdien dirbu lauke.
                    Galiu griebti lapus, genėti medžius ir praktiškai visą kitą,
                    kas susiję su sodininkyste.
                  </div>
                </div>
              </div>
              <div className="card-footer col-12">
                <Button href="review" variant="success">
                  Palikti atsiliepimą
                </Button>{" "}
                <Button
                  href="individualWorkEdit"
                  className={styles.btnspace}
                  variant="warning"
                >
                Redaguoti
                </Button>{" "}
                <Button onClick={handleShow} variant="danger">Ištrinti</Button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ištrinimas</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ar tikrai norite ištrinti individualią veiklą?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
