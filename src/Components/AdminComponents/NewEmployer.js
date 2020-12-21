import Button from "react-bootstrap/Button";

export default function NewEmployer(props) { 
  const unfreezeHandler = () => {
     props.setId(props.data.id)
     props.show()
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
          <Button variant="secondary" onClick={unfreezeHandler}>
            Atšaldyti
          </Button>
        </td>
      ) : (
        ""
      )}
    </tr>
  );
}
