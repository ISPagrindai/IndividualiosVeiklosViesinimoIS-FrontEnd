import Button from 'react-bootstrap/Button'

export default function Candidate(props){
    const clickHandler = () =>{
        props.setDeleteId(props.data.id);
        props.show(true);
    }
    return(
        <tr key={props.data.id}>
            <td>{props.data.vardas}</td>
            <td>{props.data.pavarde}</td>
            <td>{props.data.gimimoData.substring(0, 10)}</td>
            <td>{props.data.lytis}</td>
            <td>{props.data.epastas}</td>
            {props.flag ? 
            <td>
                <Button variant="danger" onClick={clickHandler}>Atsisakyti</Button>
            </td> : ""}
        </tr>
    );
}