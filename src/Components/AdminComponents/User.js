import Button from "react-bootstrap/Button";

export default function User(props) {
     const deleteHandler = () =>{
        props.show(true);
        props.setId(props.data.id);
    }
  return (
    <tr>
      <td>
        <a href={`individualWork/${props.data.id}`}>{props.data.vardas}</a>
      </td>
      <td>{props.data.pavarde}</td>
      <td>{props.data.gimimoData.substring(0,10)}</td>
      <td>{props.data.lytis}</td>
      <td>{props.data.aprasymas}</td>
      <td>{props.data.asmensKodas}</td>
      <td>{props.data.saskaitosNr}</td>
      {props.flag ? (
        <td>
          <Button variant="danger" onClick={deleteHandler}>
            Trinti
          </Button>
        </td>
      ) : (
        ""
      )}
    </tr>
  );
}
