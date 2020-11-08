import Button from 'react-bootstrap/Button'

export default function Job(props){
    return(
        <tr>
            <td><a href={`job/${props.job.id}`}>{props.job.name}</a></td>
            <td>{props.job.description}</td>
            <td>{props.job.wage}</td>
            <td>{props.job.city}</td>
            <td>{props.job.address}</td>
            {props.employer ? 
            <td>
                <Button variant="secondary" href={`job/edit/${props.job.id}`}>Redaguoti</Button>
                <Button variant="danger" href={`job/delete/${props.job.id}`}>Trinti</Button>
            </td> : ""}
        </tr>
    );
}