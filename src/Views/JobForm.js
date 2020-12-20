import { useForm, Controller } from "react-hook-form";
import { Button } from "react-bootstrap";
import CurrencyInput from 'react-currency-input-field';
import {useState, useEffect} from 'react'
import {getJobTypes} from '../Services/HelperService';
import {newJob} from '../Services/JobService'
import { useHistory } from 'react-router-dom';

export default function JobForm() {
  const { handleSubmit, register, errors, control } = useForm();
  const [types, setTypes] = useState();
  const history = useHistory();
  const onSubmit = (values) => {
    newJob(values).then(() => {
      history.push("/employers");
    })
  };

  useEffect(() =>{
    getJobTypes().then(response => {
      setTypes(response)
    })
  }, [])

  return (
    <div
      className="col-sm d-flex justify-content-center"
      style={{ "backgroundColor": "#b9e4f4", height: "100vh" }}
    >
      <div
        className="align-self-center"
        style={{ 
            "backgroundColor": "#b9e4f7",
            "width": 500
     }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Pavadinimas:</label>
            <input
              id="name"
              name="pavadinimas"
              className="form-control"
              ref={register({
                required: "*Privalomas laukas",
                minLength: {
                  value: 5,
                  message: "*Pavadinimą turi sudaryti bent 5 simboliai",
                },
              })}
            />
            {errors.pavadinimas && <span style={{"color": "red"}}>{errors.pavadinimas.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="name">Aprašymas:</label>
            <textarea
              id="aprasymas"
              name="aprasymas"
              className="form-control"
              ref={register({
                required: "*Privalomas laukas",
              })}
            />
            {errors.aprasymas && <span style={{"color": "red"}}>{errors.aprasymas.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="wage">Valandinis užmokestis:</label>
              <Controller
                render={({onChange, onBlur}) => (
                <CurrencyInput                 
                  className="form-control"
                  allowDecimals={true}
                  allowNegativeValue={false}
                  decimalsLimit={2}
                  prefix="€"
                  onChange={(e) => onChange(e)}
                  
                />)}
                id="wage"
                name="uzmokestis"
                rules={{ required: '*Privalomas laukas', min: {value: 0.01, message: '*Privalomas laukas'} }}
                control={control}
                defaultValue={"-1"}
              />
              {errors.uzmokestis && <span style={{"color": "red"}}>{errors.uzmokestis.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="miestas">Miestas</label>
            <select className="form-control" id="miestas" name="miestas" ref={register({required: "*Privalomas laukas"})}>
              <option value="">Pasirinkite miestą</option>
              <option value="Vilnius">Vilnius</option>
              <option value="Kaunas">Kaunas</option>
              <option value="Klaipėda">Klaipėda</option>
              <option value="Šiauliai">Šiauliai</option>
              <option value="Panevežys">Panevežys</option>
              <option value="Alytus">Alytus</option>
              <option value="Marijampolė">Marijampolė</option>
            </select>
            {errors.miestas && <span style={{"color": "red"}}>{errors.miestas.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="name">Adresas:</label>
            <input
              id="address"
              name="adresas"
              className="form-control"
              ref={register({
                required: "*Privalomas laukas",
                minLength: {
                  value: 5,
                  message: "*Adresą turi sudaryti bent 5 simboliai",
                },
              })}
            />
            {errors.adresas && <span style={{"color": "red"}}>{errors.adresas.message}</span>}
          </div>

          <div className="form-group">
          <label htmlFor="tipas">Veiklos tipas</label>
            <select className="form-control" id="tipas" name="veiklostipas" ref={register({required: "*Privalomas laukas"})}>
              <option value="">Pasirinkite tipą</option>
              {types ? types.map(type => (<option value={type.id}>{type.pavadinimas}</option>)) : null}
            </select>
            {errors.veiklostipas && <span style={{"color": "red"}}>{errors.veiklostipas.message}</span>} 
          </div>          

          <Button type="submit" variant="secondary">
            Kurti
          </Button>
        </form>
      </div>
    </div>
  );
}
