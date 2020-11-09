import Button from 'react-bootstrap/Button'

export default function User(props){
    return(
        <tr>
            <td><a href={`user/${props.data.id}`}>{props.data.name}</a></td>
            <td>{props.data.surname}</td>
            <td>{props.data.birthday}</td>
            <td>{props.data.sex}</td>
            <td>{props.data.phone}</td>
            <td>{props.data.email}</td>
            {props.flag ? 
            <td>
                <Button variant="secondary" href={`user/edit/${props.data.id}`}>Redaguoti</Button>
                <Button variant="danger" onClick={props.show}>Užšaldyti</Button>               
            </td> : ""}
        </tr>
    );
}