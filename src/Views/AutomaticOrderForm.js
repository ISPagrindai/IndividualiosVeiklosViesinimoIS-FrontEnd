import { Container, Col, Form, Row, Button } from "react-bootstrap";
import {useState, useEffect} from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import { useParams } from "react-router";
import temp from '../tempWorkersArray';
import { getWorkers } from '../Services/WorkerService';

init("user_eNIaeY7tuSTS9yz3Rtsvq");

export default function AutomaticOrderForm(){
    let { id } = useParams();

    const [temp, setTemp] = useState();

    useEffect(() =>{
      getWorkers().then(response => setTemp(response));
    },[])

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_jfd2rxr', 'template_rx2m34b', e.target, 'user_eNIaeY7tuSTS9yz3Rtsvq')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
      return ( 
        <>
        { temp ?
            <Container className="my-5 border">
            <Form className="my-3 mx-3" onSubmit={sendEmail}>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Darbas
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly name="worker_category" defaultValue={temp.find(w => w.id == id).veiklosTipas} />
                </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Darbuotojas
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly name="worker_fullname" defaultValue={temp.find(w => w.id == id).fullName} />
                </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Darbuotojo el-paštas
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly name="worker_email" defaultValue={temp.find(w => w.id == id).email} />
                </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Užsakovo el-paštas
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" name="employer_email" placeholder="užsakovas@gmail.com" />
                </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Darbo data
                </Form.Label>
                <Col sm="10">
                <Form.Control type="date" name="work_date" />
                </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Darbo laikas
                </Form.Label>
                <Col sm="10">
                <Form.Control type="time" name="work_time" />
                </Col>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                Siųsti laišką
                </Button>
            </Form>
            </Container>
            : null }
        </>
      );
}