import Button from "react-bootstrap/Button";

export default function User(props) {
  return (
    <tr>
      <td>
        <a href={`user/${props.data.id}`}>{props.data.vardas}</a>
      </td>
      <td>{props.data.pavarde}</td>
      <td>{props.data.gimimoData}</td>
      <td>{props.data.lytis}</td>
      <td>{props.data.aprasymas}</td>
      <td>{props.data.asmensKodas}</td>
      <td>{props.data.saskaitosNr}</td>
      {props.flag ? (
        <td>
          <Button variant="secondary" href="individualWorkEdit">
            Redaguoti
          </Button>
          <Button variant="danger" onClick={props.show}>
            Trinti
          </Button>
        </td>
      ) : (
        ""
      )}
    </tr>
  );
}
