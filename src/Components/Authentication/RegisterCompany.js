import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterCompanyService } from '../../Services/LoginService'

export default function RegisterCompany(props) {
  const [show, setShow] = useState(false);
  const { errors, register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    RegisterCompanyService(data).then(() =>{
        props.func(false);
    })
  };

  return (
    <>
      <Button variant="secondary" onClick={() => setShow(true)}>
        Įmonė
      </Button>
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
              <Form.Control
                type="email"
                name="epastas"
                ref={register({ required: "*Privalomas laukas" })}
                placeholder="el.paštas"
              />
              {errors.epastas ? (
                <span style={{ color: "red" }}>{errors.epastas.message}</span>
              ) : null}
            </Form.Group>
            <Form.Group>
              <Form.Label>Slaptažodis</Form.Label>
              <Form.Control
                type="password"
                name="slaptazodis"
                ref={register({
                  required: "*Privalomas laukas",
                  min: { value: 8, message: "*Mažiausiai 5 simboliai" },
                })}
                placeholder="slaptažodis"
              />
              {errors.slaptazodis ? (
                <span style={{ color: "red" }}>
                  {errors.slaptazodis.message}
                </span>
              ) : null}
            </Form.Group>
            <Form.Group>
              <Form.Label>Pavadinimas</Form.Label>
              <Form.Control
                type="text"
                name="pavadinimas"
                ref={register({
                  required: "*Privalomas laukas",
                  min: { value: 5, message: "*Mažiausiai 5 simboliai" },
                })}
                placeholder="vardas"
              />
              {errors.pavadinimas ? <span style={{ color: "red" }}>
                    {errors.pavadinimas.message}
                  </span> : null}
            </Form.Group>
            <div className="form-group">
              <label htmlFor="name">Aprašymas:</label>
              <textarea
                id="aprasymas"
                name="aprasymas"
                className="form-control"
                ref={register({
                  required: "*Privalomas laukas",
                  min: { value: 10, message: "*Mažiausiai 5 simboliai" },
                })}
              />
              {errors.aprasymas && (
                <span style={{ color: "red" }}>{errors.aprasymas.message}</span>
              )}
            </div>
            <Form.Group>
              <Form.Label>Telefono numeris</Form.Label>
              <Form.Control
                type="text"
                name="telNr"
                ref={register({ required: "*Privalomas laukas" })}
                placeholder="+3706XXXXXXX"
              />
              {errors.telNr ? <span style={{ color: "red" }}>
                    {errors.telNr.message}
                  </span> : null}
            </Form.Group>
            <Form.Group>
              <Form.Label>Miestas</Form.Label>
              <select
                className="form-control"
                id="miestas"
                name="miestas"
                ref={register({ required: "*Privalomas laukas" })}
              >
                <option value="">Pasirinkite miestą</option>
                <option value="Vilnius">Vilnius</option>
                <option value="Kaunas">Kaunas</option>
                <option value="Klaipėda">Klaipėda</option>
                <option value="Šiauliai">Šiauliai</option>
                <option value="Panevežys">Panevežys</option>
                <option value="Alytus">Alytus</option>
                <option value="Marijampolė">Marijampolė</option>
              </select>
              {errors.miestas ? <span style={{ color: "red" }}>
                    {errors.miestas.message}
                  </span> : null}
            </Form.Group>
            <Form.Group>
              <Form.Label>Adresas</Form.Label>
              <Form.Control
                type="text"
                name="adresas"
                ref={register({ required: "*Privalomas laukas" })}
                placeholder="adresas"
              />
              {errors.adresas ? <span style={{ color: "red" }}>
                    {errors.adresas.message}
                  </span> : null}
            </Form.Group>
            <Form.Group>
              <Form.Label>Įmonės kodas</Form.Label>
              <Form.Control
                type="number"
                name="imonesKodas"
                ref={register({
                  required: "*Privalomas laukas",
                  min: { value: 5, message: "*Mažiausiai 5 simboliai" },
                })}
                placeholder="kodas"
              />
              {errors.imonesKodas ? <span style={{ color: "red" }}>
                    {errors.imonesKodas.message}
                  </span> : null}
            </Form.Group>
            <Form.Group>
              <Form.Label>Įmonės El. Paštas</Form.Label>
              <Form.Control
                type="email"
                name="imonesPastas"
                ref={register({ required: "*Privalomas laukas" })}
                placeholder="paštas"
              />
              {errors.imonesPastas ? <span style={{ color: "red" }}>
                    {errors.imonesPastas.message}
                  </span> : null}
            </Form.Group>
            <Form.Group>
              <Form.Label>Įmonės tinklapis</Form.Label>
              <Form.Control
                type="url"
                name="tinklapis"
                ref={register}
                placeholder="http://tinklapis.lt"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Vadovas</Form.Label>
              <Form.Control
                type="text"
                name="vadovas"
                ref={register}
                placeholder="vadovas"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" form="LoginForm" variant="secondary">
            Registruotis
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
