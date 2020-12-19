import Button from "react-bootstrap/Button";

export default function NewEmployer(props) {
  return (
    <tr>
      <td>
        <a href={`employer/${props.data.id}`}>{props.data.name}</a>
      </td>
      <td>{props.data.description}</td>
      <td>{props.data.city}</td>
      <td>{props.data.address}</td>
      {props.employer ? (
        <td>
          <Button variant="secondary" onClick={props.show}>
            Patvirtinti
          </Button>        
        </td>
      ) : (
        ""
      )}
    </tr>
  );
}
