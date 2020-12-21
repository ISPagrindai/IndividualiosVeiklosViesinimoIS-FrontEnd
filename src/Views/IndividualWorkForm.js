import { useForm, Controller } from "react-hook-form";
import { Button } from "react-bootstrap";
import CurrencyInput from 'react-currency-input-field';
import { useHistory } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { newWorker } from '../Services/WorkerService';
import { getJobTypes } from '../Services/HelperService';

export default function UserProfile() {

    const [types, setTypes] = useState();
    const history = useHistory();


  const { handleSubmit, register, errors, control } = useForm();

  const onSubmit = (values) => {
    newWorker(values).then(() => {
        console.log(values)
        history.push("/individualWorkList");
      });
  };

  useEffect(() =>{
    getJobTypes().then(response => {
      setTypes(response)
    })
  }, [])


  return ( 
      <> { types ?
          <div className="container my-5 border py-5 px-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col">
                        <h3>Veiklos duomenys</h3>
                        <div className="form-group">
                            <label htmlFor="pavadinimas">Pavadinimas:</label>
                            <input
                            id="pavadinimas"
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
                            <label htmlFor="kaina">Kaina (valandai):</label>
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
                                id="kaina"
                                name="kaina"
                                rules={{ required: '*Privalomas laukas', min: {value: 0.01, message: '*Privalomas laukas'} }}
                                control={control}
                                defaultValue={"-1"}
                            />
                            {errors.kaina && <span style={{"color": "red"}}>{errors.kaina.message}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Grafikas:</label>
                            <textarea
                            id="grafikas"
                            name="grafikas"
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

                        <div className="col">
                        <div className="form-group">
                            <label htmlFor="veiklosTipas">Veiklos tipas</label>
                            <select className="form-control" id="veiklosTipas" name="veiklosTipas" ref={register({required: "*Privalomas laukas"})}>
                                <option value="">Pasirinkite veiklos tipą</option>
                                {types.map((type, i) => (
                                    <option key={i} value={type.id}>{type.pavadinimas}</option>
                                ))}
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
