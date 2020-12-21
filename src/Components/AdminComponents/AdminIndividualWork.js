import Button from "react-bootstrap/Button";

export default function AdminIndividualWrok(props) {
  return (
    <tr>
      <td>
        <a href={`individualWork/${props.data.id}`}>{props.data.pavadinimas}</a>
      </td>
      <td>{props.data.aprasymas}</td>
      <td>{props.data.kaina}</td>
      <td>{props.data.grafikas}</td>
      <td>{props.data.miestas}</td>
      {/* <td>{props.data.fkVeiklosTipasidVeiklosTipas}</td> */}
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
