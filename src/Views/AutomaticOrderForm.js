import { Container, Col, Form, Row, Button } from "react-bootstrap";
import {useState} from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import { useParams } from "react-router";
import temp from '../tempWorkersArray';

init("user_eNIaeY7tuSTS9yz3Rtsvq");

export default function AutomaticOrderForm(){
    let { id } = useParams();
    const [worker, setWorker] = useState(temp.find(w => w.id == id));

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
        <Container className="my-5 border">
        <Form className="my-3 mx-3" onSubmit={sendEmail}>
            <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            Darbas
            </Form.Label>
            <Col sm="10">
            <Form.Control plaintext readOnly name="worker_category" defaultValue={worker.category} />
            </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            Darbuotojas
            </Form.Label>
            <Col sm="10">
            <Form.Control plaintext readOnly name="worker_fullname" defaultValue={worker.fullName} />
            </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            Darbuotojo el-paštas
            </Form.Label>
            <Col sm="10">
            <Form.Control plaintext readOnly name="worker_email" defaultValue={worker.email} />
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
        </>
      );
}