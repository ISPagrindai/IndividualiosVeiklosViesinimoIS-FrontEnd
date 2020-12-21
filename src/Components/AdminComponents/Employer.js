import Button from "react-bootstrap/Button";

export default function Employer(props) {
    const deleteHandler = () =>{
        props.show(true);
        props.setId(props.data.id);
    }
  return (
    <tr>
      <td>
        <a href={`employer/${props.data.id}`}>{props.data.pavadinimas}</a>
      </td>    
      <td>{props.data.imonesKodas}</td>
      <td>{props.data.vadovas}</td>
      <td>{props.data.tinklalapis}</td>
      <td>{props.data.telNr}</td>
      <td>{props.data.elPastas}</td>
      <td>{props.data.miestas}</td>
      <td>{props.data.adresas}</td>
      {props.flag ? (
        <td>
          <Button variant="secondary" href={`job/edit/${props.data.id}`}>
            Redaguoti
          </Button>
          <Button variant="danger" onClick={deleteHandler}>
            Trinti
          </Button>
          <Button variant="danger" onClick={props.show}>
            Užšaldyti
          </Button>
        </td>
      ) : (
        ""
      )}
    </tr>
  );
}
