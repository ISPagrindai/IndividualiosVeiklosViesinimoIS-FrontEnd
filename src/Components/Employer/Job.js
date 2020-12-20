import Button from 'react-bootstrap/Button'

export default function Job(props){
    return(
        <tr>
            <td><a href={`job/${props.data.id}`}>{props.data.pavadinimas}</a></td>
            <td>{props.data.aprasymas}</td>
            <td>{props.data.uzmokestis}</td>
            <td>{props.data.miestas}</td>
            <td>{props.data.adresas}</td>
            {props.employer ? 
            <td>
                <Button variant="secondary" href={`job/edit/${props.data.id}`}>Redaguoti</Button>
                <Button variant="danger" onClick={props.show}>Trinti</Button>
            </td> : ""}
        </tr>
    );
}