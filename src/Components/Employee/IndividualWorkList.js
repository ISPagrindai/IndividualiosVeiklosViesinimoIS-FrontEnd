import { Container, Row, Modal, Button } from "react-bootstrap";
import {useState} from 'react'
import IndividualWork from "./IndividualWork";
import CategoryFilter from "./CategoryFilter";
import IndividualWorkListSort from "./IndividualWorkListSort";

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
    {
      id: 4,
      category: "Arbatos virimas",
      image: "/assets/images/tea.jpg",
      fullName: "Cin Zong",
      phone: "864981233",
      email: "zong.tea@gmail.com",
      description: "Verdu geriausias arbatas visuose Mažeikiuose."
    },
    {
      id: 5,
      category: "Žvejyba",
      image: "/assets/images/fisher.jpg",
      fullName: "Arūnas Abrazevičius",
      phone: "869413754",
      email: "arūnas.žuvis@gmail.com",
      description: "Neturi su kuo žvejoti? Žmone užkniso namuose? Užsisakyk mano paslaugas, ir savaitgalį galėsim žvejoti kartu!"
    },
  ];

  const [category, setCategory] = useState(null);
  const [number, setNumber] = useState(null);

  const sendCategoryToParent = (index) => {
    console.log(index);
    setCategory(index);
  }

  const sendNumberToParent = (index) => {
    console.log(index);
    setNumber(index);
    console.log(temp);
    console.log(temp.sort(function(a, b){
      if(a.category < b.category) { return -1; }
      if(a.category > b.category) { return 1; }
      return 0;
    }))
  }

  return (
    <>
    <Row>
    <div className="col-sm-3 col-md-3 col-lg-2 mx-3">
        <CategoryFilter sendCategoryToParent={sendCategoryToParent} data={temp}></CategoryFilter>
        < br/>
        <IndividualWorkListSort sendNumberToParent={sendNumberToParent} data={temp}></IndividualWorkListSort>
    </div>

    <div className="col">
    <Container fluid>
        <Row xs={1} sm={1} md={1} lg={2} xl={3}>
        {number === "A-Z" ?
          category ?
            temp.sort(function(a, b){
              if(a.category < b.category) { return -1; }
              if(a.category > b.category) { return 1; }
              return 0;
            }).filter(w => w.category === category).map((work) => {
              return <IndividualWork  employee={props.flag} show={handleShow} close={handleClose} data={work} />;
          })
          :
            temp.sort(function(a, b){
              if(a.category < b.category) { return -1; }
              if(a.category > b.category) { return 1; }
              return 0;
            }).map((work) => {
              return <IndividualWork  employee={props.flag} show={handleShow} close={handleClose} data={work} />;
          })
          : 
          (number === "Z-A" ?
            category ?
            temp.sort(function(a, b){
              if(a.category < b.category) { return 1; }
              if(a.category > b.category) { return -1; }
              return 0;
            }).filter(w => w.category === category).map((work) => {
              return <IndividualWork  employee={props.flag} show={handleShow} close={handleClose} data={work} />;
            })
            :
            temp.sort(function(a, b){
              if(a.category < b.category) { return 1; }
              if(a.category > b.category) { return -1; }
              return 0;
            }).map((work) => {
              return <IndividualWork  employee={props.flag} show={handleShow} close={handleClose} data={work} />;
            })
          :
            category ?
            temp.filter(w => w.category === category).map((work) => {
              return <IndividualWork  employee={props.flag} show={handleShow} close={handleClose} data={work} />;
          })
          :
            temp.map((work) => {
              return <IndividualWork  employee={props.flag} show={handleShow} close={handleClose} data={work} />;
          })
          ) 
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
