import Button from 'react-bootstrap/Button'

export default function Candidate(props){
    return(
        <tr>
            {/* <td><a href={`job/${props.data.id}`}>{props.data.name}</a></td> */}
            <td><a href='/individualWork'>{props.data.name}</a></td>
            <td>{props.data.surname}</td>
            <td>{props.data.birthday}</td>
            <td>{props.data.sex}</td>
            <td>{props.data.phone}</td>
            <td>{props.data.email}</td>
            {props.flag ? 
            <td>
                <Button variant="danger" onClick={props.show}>Atsisakyti</Button>
            </td> : ""}
        </tr>
    );
}