import { Button, Modal, Form } from 'react-bootstrap'
import { useState } from 'react'
import Company from './RegisterCompany'
import User from './RegisterUser'

export default function Register(){
    const [show, setShow] = useState(false);

    return (
        <>
        <Button variant="secondary" onClick={() => setShow(true)}>Registruotis</Button>
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
            <div className="row">
                <div className="col-sm d-flex justify-content-center">
                    <Form.Label>Registruotis kaip Klientas</Form.Label>
                    <User func={setShow}/>
                </div>
                <div className="col-sm d-flex justify-content-center">
                    <Form.Label>Registruotis kaip Įmonė</Form.Label>
                    <Company func={setShow}/>
                </div>
            </div>
        </Modal.Body>
      </Modal>
        </>
    );
}