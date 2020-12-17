import { Container, Row, Modal, Button } from "react-bootstrap";
import {useState} from 'react'
import IndividualWork from "./IndividualWork";

export default function IndividualWorkList(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const temp = [
    {
        id: 1,
        category: "Muzikantė",
        image: "/assets/images/photo.jpg",
        fullName: "Ingrida Ramanauskaitė",
        phone: "868405446",
        email: "Ingrida.Gitaristė@muzika.lt",
        description: "Nuo pat mažumos mane traukia muzika, 7 metu jau mokėjau groti penkiais instrumentais, tačiau, pagal mane, niekas niekad neaplenks gitaros. 2016 metais laimėjau Lietuvos balsą bei turiu daugelį apdovanojimų iš muzikos konkursų. Tad jeigu kažką domina talentinga muzikante, ar tai būtų vestuvėms,gimtadieniui ar šiaip mini-koncertui, susisiekite su manim."
    },
    {
        id: 2,
        category: "Sodininkas",
        image: "/assets/images/gardener.jpg",
        fullName: "Tomas Žaliauskas",
        phone: "865498612",
        email: "tomas.sodas@gmail.com",
        description: "Man labai patinka gamta, todėl kasdien dirbu lauke.Galiu griebti lapus, genėti medžius ir praktiškai visą kitą,kas susiję su sodininkyste."
    },
    {
        id: 3,
        category: "Sodininkas",
        image: "/assets/images/gardener.jpg",
        fullName: "Tomas Žaliauskas",
        phone: "865498612",
        email: "tomas.sodas@gmail.com",
        description: "Man labai patinka gamta, todėl kasdien dirbu lauke.Galiu griebti lapus, genėti medžius ir praktiškai visą kitą,kas susiję su sodininkyste."
    },
  ];

  return (
    <>
    <Container fluid>
        <Row sm={1} md={2} lg={2} xl={3}>
        {temp.map((work) => {
            return <IndividualWork employee={props.flag} show={handleShow} close={handleClose} data={work} />;
        })}
        </Row>
        </Container>
        
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
