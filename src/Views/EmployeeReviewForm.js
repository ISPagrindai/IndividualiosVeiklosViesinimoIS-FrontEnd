import { useForm, Controller } from "react-hook-form";
import { Button } from "react-bootstrap";
import CurrencyInput from 'react-currency-input-field';
import { useParams, useHistory} from "react-router";
import {createReviewOnWorker} from '../Services/ReviewService';

export default function Review() {

  const { handleSubmit, register, errors, control } = useForm();

  const history = useHistory();

  const onSubmit = (values) => {
    createReviewOnWorker(values).then(() => {
        history.push("/individualWorkList");
      });
    } 


  let {workId} = useParams();

  

  return (
          <div className="container my-5">
              <div className="row justify-content-center">
                  <div className="col-6">
                    <div className="card">
                        <h4 className="card-header">Atsiliepimas apie individualią veiklą</h4> 
                        <form onSubmit={handleSubmit(onSubmit)}>
                        {workId ? (<input type="hidden" value={workId} name="individualiVeiklaId" ref={register}/>) : null}
                        
                            <div className="row justify-content-center">
                                <div className="form-group">
                                    <label className="mt-2" htmlFor="komentaras">Komentaras</label>
                                    <textarea
                                    id="komentaras"
                                    name="komentaras"
                                    style={{ height: "15vh" }}
                                    className="form-control"
                                    ref={register({
                                        required: "*Privalomas laukas",
                                    })}
                                    />
                                    {errors.komentaras && <span style={{"color": "red"}}>{errors.komentaras.message}</span>}
                                </div>
                            </div>
                                
                            <div className="row justify-content-center">
                                <div className="form-group">
                                    <label htmlFor="ivertinimas">Įvertinimas:</label>
                                    <Controller
                                        render={({onChange, onBlur}) => (
                                        <CurrencyInput                 
                                        className="form-control"
                                        allowDecimals={true}
                                        allowNegativeValue={false}
                                        decimalsLimit={1}
                                        onChange={(e) => onChange(e)}
                                        />)}
                                        id="ivertinimas"
                                        name="ivertinimas"
                                        rules={{
                                            required: '*Privalomas laukas', 
                                            min: {
                                                value: 0.1, message: '*Įvertinimias turi būti bent 0.1'
                                            },
                                            max: {
                                                value: 10,
                                                message: "Įvertinimas engali būti daugiau 10"
                                            } 
                                        }}
                                        control={control}
                                        defaultValue={"-1"}
                                    />
                                    {errors.ivertinimas && <span style={{"color": "red"}}>{errors.ivertinimas.message}</span>}
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <Button type="submit" variant="secondary" className="mb-3">
                                    Siųsti atsiliepimą
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  );
}
