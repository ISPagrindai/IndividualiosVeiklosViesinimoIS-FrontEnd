import { Container, Row, Modal, Button } from "react-bootstrap";
import {useState} from 'react'
import IndividualWork from "./IndividualWork";
import CategoryFilter from "./CategoryFilter";

export default function IndividualWorkList(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const temp = [
    {
        id: 1,
        category: "Muzika",
        image: "/assets/images/musician.jpeg",
        fullName: "Ingrida Ramanauskaitė",
        phone: "868405446",
        email: "Ingrida.Gitaristė@muzika.lt",
        description: "2016 metais laimėjau Lietuvos balsą bei turiu daugelį apdovanojimų iš muzikos konkursų. Tad jeigu kažką domina talentinga muzikante, ar tai būtų vestuvėms,gimtadieniui ar šiaip mini-koncertui, susisiekite su manim."
    },
    {
        id: 2,
        category: "Sodininkystė",
        image: "/assets/images/gardener.jpg",
        fullName: "Tomas Žaliauskas",
        phone: "865498612",
        email: "tomas.sodas@gmail.com",
        description: "Man labai patinka gamta, todėl kasdien dirbu lauke.Galiu griebti lapus, genėti medžius ir praktiškai visą kitą,kas susiję su sodininkyste."
    },
    {
        id: 3,
        category: "Sodininkystė",
        image: "/assets/images/gardener3.jpeg",
        fullName: "Vitalijus Medinauskas",
        phone: "862184622",
        email: "vitalijus.sodas@gmail.com",
        description: "Gerai pjaunu žolę, geniu medžius, raviu daržus. Galiu padaryti ir ISP laborą."
    },
  ];

  const [category, setCategory] = useState(null);

  const sendDataToParent = (index) => {
    console.log(index);
    setCategory(index);
  }

  return (
    <>
    <Row>
    <div className="col-sm-3 col-md-3 col-lg-2 mx-3">
        <CategoryFilter sendDataToParent={sendDataToParent} data={temp}></CategoryFilter>
    </div>

    <div className="col">
    <Container fluid>
        <Row xs={1} sm={1} md={1} lg={2} xl={3}>
        {category ?
        
          temp.filter(w => w.category === category).map((work) => {
            return <IndividualWork  employee={props.flag} show={handleShow} close={handleClose} data={work} />;
        })
        :
          temp.map((work) => {
            return <IndividualWork  employee={props.flag} show={handleShow} close={handleClose} data={work} />;
        })
        }
        </Row>
        </Container>
    </div>
    </Row>

    
        
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
