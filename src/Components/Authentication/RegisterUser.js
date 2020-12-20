import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react'
import { useForm } from "react-hook-form";

export default function RegisterUser(props){
    const [show, setShow] = useState(false);

    const { handleSubmit, register, errors } = useForm();

    const onSubmit = (values) => {
      console.log(values);
    };

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
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <label htmlFor="firstname">Vardas:</label>
            <input
              id="firstname"
              name="firstname"
              className="form-control"
              ref={register({
                required: "*Privalomas laukas",
                minLength: {
                  value: 3,
                  message: "*Turi būti bent 3 simboliai"
                }
              })}
            />
            {errors.firstname && <span style={{"color": "red"}}>{errors.firstname.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Pavardė:</label>
            <input
              id="lastname"
              name="lastname"
              className="form-control"
              ref={register({
                required: "*Privalomas laukas",
                minLength: {
                  value: 3,
                  message: "*Turi būti bent 3 simboliai"
                }
              })}
            />
            {errors.lastname && <span style={{"color": "red"}}>{errors.lastname.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="name">El-paštas:</label>
            <input
              id="email"
              name="email"
              className="form-control"
              ref={register({
                required: "*Privalomas laukas",
                pattern:  /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
              })}
            />
            {errors.email && <span style={{"color": "red"}}>{errors.email.message}</span>}
            {errors.email && errors.email.type === "pattern" && <span style={{"color": "red"}}>*Neatitinka email formato</span>}
          </div>

          <div className="form-group">
            <label htmlFor="name">Aprašymas:</label>
            <textarea
              id="aprasymas"
              name="aprasymas"
              className="form-control"
              ref={register({
                required: "*Privalomas laukas",
                minLength: {
                  value: 10,
                  message: "*Turi būti bent 10 simbolių"
                },
                maxLength: 255,
                message: "*Turi būti ne daugiau 255 simbolių"
              })}
            />
            {errors.aprasymas && <span style={{"color": "red"}}>{errors.aprasymas.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="id">Asmens kodas:</label>
            <input
              id="id"
              name="id"
              className="form-control"
              ref={register({
                required: "*Privalomas laukas",
                pattern: /^[0-9]*$/,
                minLength: {
                  value: 11,
                  message: "*Turi sudaryti būti 11 simbolių"
                },
                maxLength: {
                  value: 11,
                  message: "*Turi sudaryti būti 11 simbolių"
                }
              })}
            />
            {errors.id && <span style={{"color": "red"}}>{errors.id.message}</span>}
            {errors.id && errors.id.type === "pattern" && <span style={{"color": "red"}}>*Turi būti skaičius</span>}
          </div>

          <div className="form-group">
            <label htmlFor="name">Gimimo data:</label>
            <input
              id="birthday"
              name="birthday"
              type="date"
              className="form-control"
              ref={register({
                required: "*Privalomas laukas",
              })}
            />
            {errors.birthday && <span style={{"color": "red"}}>{errors.birthday.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="gender">Lytis</label>
            <select className="form-control" id="gender" name="gender" ref={register({required: "*Privalomas laukas"})}>
              <option value="">Pasirinkite lytį</option>
              <option value="male">Vyras</option>
              <option value="female">Moteris</option>
              <option value="apache">Boeing AH-64 Apache</option>
            </select>
            {errors.gender && <span style={{"color": "red"}}>{errors.gender.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="iban">Saskaitos numeris:</label>
            <input
              id="iban"
              name="iban"
              className="form-control"
              ref={register({
                required: "*Privalomas laukas",
                pattern: /^([A-Z]{2}[-]?[0-9]{2})(?=(?:[-]?[A-Z0-9]){9,30}$)((?:[-]?[A-Z0-9]{3,5}){2,7})([-]?[A-Z0-9]{1,3})?$/,
                minLength: {
                  value: 22,
                  message: "*Turi sudaryti būti 22 simbolių"
                },
                maxLength: {
                  value: 34,
                  message: "*Turi sudaryti būti 34 simbolių"
                }
              })}
            />
            {errors.iban && <span style={{"color": "red"}}>{errors.iban.message}</span>}
            {errors.iban && errors.iban.type === "pattern" && <span style={{"color": "red"}}>*Turi būti validus IBAN numeris</span>}
          </div>
          

          <Button type="submit" variant="secondary">
            Kurti
          </Button>
        </form>
        </Modal.Body>
        
      </Modal>
        </>
    );
}