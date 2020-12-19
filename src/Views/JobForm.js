import { useForm, Controller } from "react-hook-form";
import { Button } from "react-bootstrap";
import CurrencyInput from 'react-currency-input-field';

export default function JobForm() {
  const { handleSubmit, register, errors, control } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };

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
              name="name"
              className="form-control"
              ref={register({
                required: "*Privalomas laukas",
                minLength: {
                  value: 5,
                  message: "*Pavadinimą turi sudaryti bent 5 simboliai",
                },
              })}
            />
            {errors.name && <span style={{"color": "red"}}>{errors.name.message}</span>}
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
                name="wage"
                rules={{ required: '*Privalomas laukas', min: {value: 0.01, message: '*Privalomas laukas'} }}
                control={control}
                defaultValue={"-1"}
              />
              {errors.wage && <span style={{"color": "red"}}>{errors.wage.message}</span>}
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
              name="address"
              className="form-control"
              ref={register({
                required: "*Privalomas laukas",
                minLength: {
                  value: 5,
                  message: "*Adresą turi sudaryti bent 5 simboliai",
                },
              })}
            />
            {errors.address && <span style={{"color": "red"}}>{errors.address.message}</span>}
          </div>
          

          <Button type="submit" variant="secondary">
            Kurti
          </Button>
        </form>
      </div>
    </div>
  );
}
