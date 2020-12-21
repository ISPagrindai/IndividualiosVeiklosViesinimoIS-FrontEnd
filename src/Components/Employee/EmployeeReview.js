import Button from 'react-bootstrap/Button'

export default function EmployeeReview(props){
    return(
        <tr>
            <td>{props.data.komentaras}</td>
            <td>{props.data.ivertinimas}</td>
            <td>{props.data.siuntejo_tipas}</td>
        </tr>
    );
}