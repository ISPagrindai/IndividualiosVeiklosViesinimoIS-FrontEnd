import Button from 'react-bootstrap/Button'

export default function EmployeeReview(props){
    return(
        <tr>
            <td>{props.data.comment}</td>
            <td>{props.data.rating}</td>
            <td>{props.data.user_type}</td>
            <td>{props.data.user_id}</td>
            <td>{props.data.job_type}</td>
        </tr>
    );
}