import Button from 'react-bootstrap/Button'

export default function Job(props){
    return(
        <tr>
            <td><a href={`job/${props.data.id}`}>{props.data.name}</a></td>
            <td>{props.data.description}</td>
            <td>{props.data.wage}</td>
            <td>{props.data.city}</td>
            <td>{props.data.address}</td>
            {props.employer ? 
            <td>
                <Button variant="secondary" href={`job/edit/${props.data.id}`}>Redaguoti</Button>
                <Button variant="danger" onClick={props.show}>Trinti</Button>
            </td> : ""}
        </tr>
    );
}