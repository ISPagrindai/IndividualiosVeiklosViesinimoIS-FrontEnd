import { useForm, Controller } from "react-hook-form";
import { Button } from "react-bootstrap";
import CurrencyInput from 'react-currency-input-field';
import {useState, useEffect} from 'react'
import {getJobTypes} from '../Services/HelperService';
import {newJob, getJob, updateJob} from '../Services/JobService'
import { useHistory, useParams } from 'react-router-dom';

export default function JobForm() {
  const { handleSubmit, register, errors, control } = useForm();
  const { id } = useParams();
  const [data, setData] = useState();
  const [types, setTypes] = useState();
  const [uzmokestis, setUzmokestis] = useState();
  const history = useHistory();
  const miestai = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevežys", "Alytus", "Marijampolė"];
  
  const onSubmit = (values) => {
    values.uzmokestis = uzmokestis;
    if (values.id) {
      updateJob(values).then(() => {
        history.push("/employers");
      });
    } 
    else {
      newJob(values).then(() => {
        history.push("/employers");
      });
    }
  };
  useEffect(() =>{
    getJobTypes().then(response => {
      setTypes(response)
    })
  }, [])
  useEffect(() =>{
    if(id){
      getJob(id).then((response) =>{
        setData(response);
        setUzmokestis(response.uzmokestis)
      })
    }
  }, [id])

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
          {id ? (<input type="hidden" value={id} name="id" ref={register}/>) : null}
          <div className="form-group">
            <label htmlFor="name">Pavadinimas:</label>
            <input
              id="name"
              name="pavadinimas"
              className="form-control"
              defaultValue={data ? data.pavadinimas : null}
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
              defaultValue={data ? data.aprasymas : null}
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
                  onChange={(e) => onChange(()=> setUzmokestis(e))}
                  value={uzmokestis}
                />)}
                id="wage"
                name="uzmokestis"
                rules={{ required: '*Privalomas laukas', min: {value: 0.01, message: '*Privalomas laukas'} }}
                control={control}
                defaultValue={data?.uzmokestis || ""}
              />
              {errors.uzmokestis && <span style={{"color": "red"}}>{errors.uzmokestis.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="miestas">Miestas</label>
            <select className="form-control" id="miestas" name="miestas" ref={register({required: "*Privalomas laukas"})}>
              <option value="">Pasirinkite miestą</option>
              {miestai.map(miestas => {
                if(data && data.miestas === miestas)
                  return (<option value={miestas} selected>{miestas}</option>)

                  return (<option value={miestas}>{miestas}</option>)
                })}
            </select>
            {errors.miestas && <span style={{"color": "red"}}>{errors.miestas.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="name">Adresas:</label>
            <input
              id="address"
              name="adresas"
              defaultValue={data ? data.adresas : null}
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
            <select className="form-control" id="tipas" name="tipas" ref={register({required: "*Privalomas laukas"})}>
              <option value="">Pasirinkite tipą</option>
              {types ? types.map(type => {
                if(data && data.tipas === type.id)
                  return (<option value={type.id} selected>{type.pavadinimas}</option>)

                return (<option value={type.id}>{type.pavadinimas}</option>)
              }) : null}
            </select>
            {errors.tipas && <span style={{"color": "red"}}>{errors.tipas.message}</span>} 
          </div>          

          <Button type="submit" variant="secondary">
            Kurti
          </Button>
        </form>
      </div>
    </div>
  );
}
