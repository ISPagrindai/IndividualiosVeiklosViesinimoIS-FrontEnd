import { useForm, Controller } from "react-hook-form";
import { Button } from "react-bootstrap";
import CurrencyInput from 'react-currency-input-field';
import { useHistory, useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { newWorker, getWorker, updateWorker } from '../Services/WorkerService';
import { getJobTypes } from '../Services/HelperService';

export default function UserProfile() {

    const [types, setTypes] = useState();
    const history = useHistory();
    const {id} = useParams();
    const [data, setData] = useState();
    const [kaina, setKaina] = useState();
    const miestai = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevežys", "Alytus", "Marijampolė"];

  const { handleSubmit, register, errors, control, setValue } = useForm();

  const onSubmit = (values) => {
    values.kaina = kaina;
    if(values.id){
        updateWorker(values).then(() => {
            history.push("/individualWorkList");
        });
    }
    else{
        newWorker(values).then(() => {
            history.push("/individualWorkList");
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
        getWorker(id).then(response => {
            setData(response);
            setKaina(response.kaina)
            setValue("kaina", response.kaina)
        })
    }
  },[id])


  return ( 
      <> { types ?
          <div className="container my-5 border py-5 px-5">
            <form onSubmit={handleSubmit(onSubmit)}>
            {id ? (<input type="hidden" value={id} name="id" ref={register}/>) : null}
                <div className="row">
                    <div className="col">
                        <h3>Veiklos duomenys</h3>
                        <div className="form-group">
                            <label htmlFor="pavadinimas">Pavadinimas:</label>
                            <input
                            id="pavadinimas"
                            name="pavadinimas"
                            defaultValue={data ? data.pavadinimas : null}
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
                            defaultValue={data ? data.aprasymas : null}
                            className="form-control"
                            ref={register({
                                required: "*Privalomas laukas",
                            })}
                            />
                            {errors.aprasymas && <span style={{"color": "red"}}>{errors.aprasymas.message}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="kaina">Kaina (valandai):</label>
                            <Controller
                                render={({onChange, onBlur}) => (
                                <CurrencyInput                 
                                className="form-control"
                                allowDecimals={true}
                                allowNegativeValue={false}
                                decimalsLimit={2}
                                prefix="€"
                                onChange={(e) => {onChange(e); setKaina(e)} }
                                value={kaina}
                                onBlur={onBlur}
                                
                                />)}
                                id="kaina"
                                name="kaina"
                                rules={{ required: '*Privalomas laukas', min: {value: 0.01, message: '*Privalomas laukas'} }}
                                control={control}
                                defaultValue={data?.kaina || ""}
                            />
                            {errors.kaina && <span style={{"color": "red"}}>{errors.kaina.message}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Grafikas:</label>
                            <textarea
                            id="grafikas"
                            name="grafikas"
                            defaultValue={data ? data.grafikas : null}
                            className="form-control"
                            ref={register({
                                required: "*Privalomas laukas",
                            })}
                            />
                            {errors.grafikas && <span style={{"color": "red"}}>{errors.grafikas.message}</span>}
                        </div>
                    </div>

                    <div className="col">
                        <h3>Vieta</h3>
                        <div className="form-group">
                            <label htmlFor="miestas">Miestas</label>
                            <select className="form-control" id="miestas" name="miestas" ref={register({required: "*Privalomas laukas"})}>
                                <option value="">Pasirinkite miestą</option>
                                  {miestai.map(miestas => {
                                      if (data && data.miestas === miestas)
                                          return (<option value={miestas} selected>{miestas}</option>)

                                      return (<option value={miestas}>{miestas}</option>)
                                  })}
                            </select>
                            {errors.miestas && <span style={{"color": "red"}}>{errors.miestas.message}</span>}
                        </div>

                        <div className="col">
                        <div className="form-group">
                            <label htmlFor="veiklosTipas">Veiklos tipas</label>
                            <select className="form-control" id="veiklosTipas" name="veiklosTipas" ref={register({required: "*Privalomas laukas"})}>
                                <option value="">Pasirinkite veiklos tipą</option>
                                      {types ? types.map(type => {
                                          if (data && data.veiklosTipas === type.id)
                                              return (<option value={type.id} selected>{type.pavadinimas}</option>)

                                          return (<option value={type.id}>{type.pavadinimas}</option>)
                                      }) : null}
                            </select>
                            {errors.miestas && <span style={{"color": "red"}}>{errors.miestas.message}</span>}
                        </div>
                    </div>
                       
                    </div>
                </div>

                <Button type="submit" variant="secondary" className="mt-3">
                    Kurti individualų darbą
                </Button>
            </form>
        </div>
        : null }
        </>
  );
}
