import { useForm, Controller } from "react-hook-form";
import { Button } from "react-bootstrap";
import CurrencyInput from 'react-currency-input-field';

export default function Review() {
  const { handleSubmit, register, errors, control } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
          <div className="container my-5">
              <div className="row justify-content-center">
                  <div className="col-5">
                    <div className="card px-3 py-3">
                        <h4>Atsiliepimo apie individualią veiklą palikimas</h4> 
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row justify-content-center">
                                <div className="form-group">
                                    <label htmlFor="comment">Komentaras</label>
                                    <textarea
                                    id="comment"
                                    name="comment"
                                    style={{ height: "15vh" }}
                                    className="form-control"
                                    ref={register({
                                        required: "*Privalomas laukas",
                                    })}
                                    />
                                    {errors.comment && <span style={{"color": "red"}}>{errors.comment.message}</span>}
                                </div>
                            </div>
                                
                            <div className="row justify-content-center">
                                <div className="form-group">
                                    <label htmlFor="rating">Įvertinimas:</label>
                                    <Controller
                                        render={({onChange, onBlur}) => (
                                        <CurrencyInput                 
                                        className="form-control"
                                        allowDecimals={true}
                                        allowNegativeValue={false}
                                        decimalsLimit={1}
                                        onChange={(e) => onChange(e)}
                                        />)}
                                        id="rating"
                                        name="rating"
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
                                    {errors.rating && <span style={{"color": "red"}}>{errors.rating.message}</span>}
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <Button type="submit" variant="secondary" className="mt-3">
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
