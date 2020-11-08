import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import styles from "../IndividualWork.module.css";
import classNames from "classnames";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'

export default function IndividualWorkView() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-sm-4 d-flex justify-content-center"
            style={{
              height: "75vh",
              "margin-top": "auto",
              "margin-bottom": "auto",
            }}
          >
            <Image
              style={{ "max-width": "100%" }}
              src={`${process.env.PUBLIC_URL}/assets/images/photo.jpg`}
              style={{ border: "5px solid #576675", padding: 0 }}
              fluid
            />
          </div>
          <div
            className="col-sm-8 d-flex justify-content-center"
            style={{
              "background-color": "#faebd7",
              border: "5px solid #576675",
              padding: 0,
              height: "100vh",
            }}
          >
            <div>
              <div className="mt-5 mr-5 text-right">
                <Button href="vipForm" variant="info">
                  Iškelti į priekį!
                </Button>{" "}
              </div>
              <div className={styles.mtcustom}>
                <h2>-- Muzikantė - Gitaristė --</h2>
              </div>
              <div className={styles.mtcustom}>
                <h4>
                  <a href="userProfile" style={{ color: "#000" }}>
                    Ingrida Ramanauskaitė
                  </a>
                </h4>
              </div>
              <div className={classNames(styles.mtcustom, styles.mxcustom)}>
                <p>
                  Nuo pat mažumos mane traukia muzika, 7 metu jau mokėjau groti
                  penkiais instrumentais, tačiau, pagal mane, niekas niekad
                  neaplenks gitaros. 2016 metais laimėjau Lietuvos balsą bei
                  turiu daugelį apdovanojimų iš muzikos konkursų. Tad jeigu
                  kažką domina talentinga muzikante, ar tai būtų vestuvėms,
                  gimtadieniui ar šiaip mini-koncertui, susisiekite su manim.
                </p>
              </div>
              <div className={classNames("row", styles.mtcustom)}>
                <div className="col">Telefonas: 868405446</div>
                <div className="col">
                  El. Paštas: Ingrida.Gitaristė@muzika.lt
                </div>
              </div>
              <div className={classNames("btn-group", styles.mtcustom)}>
                <Button
                  href="individualWorkEdit"
                  className={styles.btnspace}
                  variant="warning"
                >
                  Redaguoti
                </Button>{" "}
                <Button onClick={handleShow} variant="danger">Ištrinti</Button>{" "}
              </div>
              <div className={styles.mtcustom}>
                <Button href="review" variant="success">
                  Palikti atsiliepimą
                </Button>{" "}
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
