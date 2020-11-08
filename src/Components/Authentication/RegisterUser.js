import { Button, Modal, Form } from 'react-bootstrap'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function RegisterUser(props){
    const [show, setShow] = useState(false);
    const { register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        props.func(false)
        //TODO: call login service
    }

    return (
        <>
        <Button variant="secondary" onClick={() => setShow(true)}>Klientas</Button>
        <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Registruotis
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)} id="LoginForm">
            <Form.Group>
                <Form.Label>El. Paštas</Form.Label>
                <Form.Control type="email" name="email" ref={register} placeholder="el.paštas"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Slaptažodis</Form.Label>
                <Form.Control type="password" name="password" ref={register} placeholder="slaptažodis"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Pakartokite slaptažodį</Form.Label>
                <Form.Control type="password" name="password2" ref={register} placeholder="slaptažodis"/>
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button type="submit" form="LoginForm" variant="secondary">Registruotis</Button>
        </Modal.Footer>
      </Modal>
        </>
    );
}