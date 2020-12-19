import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import CurrencyInput from 'react-currency-input-field';

export default function JobForm() {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div
      className="col-sm d-flex justify-content-center"
      style={{ "background-color": "#b9e4f4", height: "100vh" }}
    >
      <div
        className="align-self-center"
        style={{ "background-color": "#9DD9D2" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label for="name">Pavadinimas:</label>
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
            {errors.name && errors.name.message}
          </div>

          <div className="form-group">
            <label for="name">Aprašymas:</label>
            <textarea
              id="aprasymas"
              name="aprasymas"
              className="form-control"
              ref={register({
                required: "*Privalomas laukas",
              })}
            />
            {errors.aprasymas && errors.aprasymas.message}
          </div>

          <div className="form-group">
            <label for="wage">Valandinis užmokestis:</label>
            <CurrencyInput
              id="wage"
              name="wage"
              className="form-control"
              allowDecimals={true}
              allowNegativeValue={false}
              decimalsLimit={2}
              prefix="€"
              onChange={(value, name) => console.log(value, name)}
            />
          </div>

          <div class="form-group">
            <label for="miestas">Miestas</label>
            <select class="form-control" id="miestas" name="miestas" ref={register({required: "*Privalomas laukas"})}>
              <option value="">Pasirinkite miestą</option>
              <option value="Vilnius">Vilnius</option>
              <option value="Kaunas">Kaunas</option>
              <option value="Klaipėda">Klaipėda</option>
              <option value="Šiauliai">Šiauliai</option>
              <option value="Panevežys">Panevežys</option>
              <option value="Alytus">Alytus</option>
              <option value="Marijampolė">Marijampolė</option>
            </select>
            {errors.miestas && errors.miestas.message}
          </div>
          

          <Button size="lg" variant="secondary">
            Kurti
          </Button>
        </form>
      </div>
    </div>
  );
}
