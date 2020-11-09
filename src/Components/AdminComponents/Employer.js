import Button from "react-bootstrap/Button";

export default function Employer(props) {
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
          <Button variant="secondary" href={`job/edit/${props.data.id}`}>
            Redaguoti
          </Button>
          <Button variant="danger" onClick={props.show}>
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
